import * as Yup from 'yup';
import Student from '../models/Student';
import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async index(req, res) {
    const studentId = req.params.id;

    const studentExists = await Student.findByPk(studentId);
    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }

    const helpOrders = await HelpOrder.findAll({
      where: {
        student_id: studentId,
      },
      order: ['created_at'],
      attributes: ['id', 'question', 'answer', 'answer_at'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const studentId = req.params.id;

    const studentExists = await Student.findByPk(studentId);
    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }

    const register = { student_id: studentId, ...req.body };

    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(register))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = await HelpOrder.create(register);

    const helpOrder = await HelpOrder.findByPk(id, {
      attributes: ['id', 'question'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(helpOrder);
  }
}

export default new HelpOrderController();
