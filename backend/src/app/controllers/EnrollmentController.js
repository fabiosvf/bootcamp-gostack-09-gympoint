import * as Yup from 'yup';
import {
  startOfDay,
  // startOfHour,
  parseISO,
  // isBefore,
  // format,
  // subHours,
  addMonths,
  compareAsc,
} from 'date-fns';
// import pt from 'date-fns/locale/pt';
import { Op } from 'sequelize';
import Student from '../models/Student';
import Plan from '../models/Plan';
import Enrollment from '../models/Enrollment';

import EnrollmentConfirmationMail from '../jobs/EnrollmentConfirmationMail';
import EnrollmentChangesMail from '../jobs/EnrollmentChangesMail';
import EnrollmentCancelledMail from '../jobs/EnrollmentCancelledMail';
import Queue from '../../lib/Queue';

class EnrollmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const enrollments = await Enrollment.findAll({
      order: ['start_date'],
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    return res.json(enrollments);
  }

  async store(req, res) {
    const register = req.body;

    const schema = Yup.object().shape({
      student_id: Yup.number()
        .required()
        .positive()
        .integer(),
      plan_id: Yup.number()
        .required()
        .positive()
        .integer(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(register))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findByPk(register.student_id);
    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }

    const planExists = await Plan.findByPk(register.plan_id);
    if (!planExists) {
      return res.status(400).json({ error: 'Plan does not exists.' });
    }

    register.start_date = startOfDay(parseISO(req.body.start_date));
    register.end_date = addMonths(register.start_date, planExists.duration);
    register.price = planExists.duration * planExists.price;

    const enrollmentExists = await Enrollment.findAndCountAll({
      where: {
        [Op.or]: [
          {
            start_date: {
              [Op.between]: [register.start_date, register.end_date],
            },
          },
          {
            end_date: {
              [Op.between]: [register.start_date, register.end_date],
            },
          },
        ],
      },
    });

    if (enrollmentExists.count > 0) {
      return res
        .status(400)
        .json({ error: "It's already exists an enrollment for period." });
    }

    const { id } = await Enrollment.create(register);

    const enrollment = await Enrollment.findByPk(id, {
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    await Queue.add(EnrollmentConfirmationMail.key, {
      enrollment,
    });

    return res.json(enrollment);
  }

  async update(req, res) {
    const register = req.body;
    const { id } = req.params;

    const schema = Yup.object().shape({
      student_id: Yup.number()
        .required()
        .positive()
        .integer(),
      plan_id: Yup.number()
        .required()
        .positive()
        .integer(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(register))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const enrollmentExists = await Enrollment.findByPk(id);
    if (!enrollmentExists) {
      return res.status(400).json({ error: 'Enrollment does not exists.' });
    }

    if (
      enrollmentExists &&
      enrollmentExists.student_id !== register.student_id
    ) {
      return res.status(400).json({ error: 'Student should not be changed.' });
    }

    const planExists = await Plan.findByPk(register.plan_id);
    if (!planExists) {
      return res.status(400).json({ error: 'Plan does not exists.' });
    }

    register.start_date = startOfDay(parseISO(req.body.start_date));
    register.end_date = addMonths(register.start_date, planExists.duration);
    register.price = planExists.duration * planExists.price;

    if (
      enrollmentExists.plan_id === register.plan_id &&
      compareAsc(enrollmentExists.start_date, register.start_date) === 0
    ) {
      return res.status(400).json({ error: 'No changes' });
    }

    const enrollmentPeriodExists = await Enrollment.findAndCountAll({
      where: {
        id: {
          [Op.ne]: id,
        },
        [Op.or]: [
          {
            start_date: {
              [Op.between]: [register.start_date, register.end_date],
            },
          },
          {
            end_date: {
              [Op.between]: [register.start_date, register.end_date],
            },
          },
        ],
      },
    });

    if (enrollmentPeriodExists.count > 0) {
      return res
        .status(400)
        .json({ error: "It's already exists an enrollment for period." });
    }

    await enrollmentExists.update(register);

    const enrollment = await Enrollment.findByPk(id, {
      attributes: ['id', 'start_date', 'end_date', 'price'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    await Queue.add(EnrollmentChangesMail.key, {
      enrollment,
    });

    return res.json(enrollment);
  }

  async delete(req, res) {
    const { id } = req.params;

    const enrollment = await Enrollment.findByPk(id, {
      attributes: ['id', 'start_date', 'end_date', 'price'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    if (enrollment == null) {
      return res.status(400).json({ error: 'Enrollment does not exists' });
    }

    const enrollmentCancelled = enrollment;

    await enrollment.destroy();

    const { page = 1 } = req.query;

    const enrollments = await Enrollment.findAll({
      order: ['start_date'],
      attributes: ['id', 'start_date', 'end_date', 'price'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    await Queue.add(EnrollmentCancelledMail.key, {
      enrollment: enrollmentCancelled,
    });

    return res.json(enrollments);
  }
}

export default new EnrollmentController();
