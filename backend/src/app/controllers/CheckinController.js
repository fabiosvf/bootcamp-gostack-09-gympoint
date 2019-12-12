import { addHours } from 'date-fns';
import { Op } from 'sequelize';
import Student from '../models/Student';
import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const studentId = req.params.id;

    const studentExists = await Student.findByPk(studentId);
    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }

    const checkins = await Checkin.findAll({
      where: {
        student_id: studentId,
      },
      order: ['created_at'],
      attributes: ['id', 'created_at', 'updated_at'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(checkins);
  }

  async store(req, res) {
    const studentId = req.params.id;

    const studentExists = await Student.findByPk(studentId);
    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }

    const actual_date = new Date();
    const previous_date = addHours(actual_date, -7);

    const checkinExists = await Checkin.findAndCountAll({
      where: {
        created_at: {
          [Op.between]: [previous_date, actual_date],
        },
      },
    });

    // Allow only 5 check ins
    if (checkinExists.count >= 5) {
      return res.status(400).json({ error: 'Checkins exceeded in period' });
    }

    const register = {
      student_id: studentId,
    };

    const { id } = await Checkin.create(register);

    const checkin = await Checkin.findByPk(id, {
      attributes: ['created_at', 'updated_at'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(checkin);
  }
}

export default new CheckinController();
