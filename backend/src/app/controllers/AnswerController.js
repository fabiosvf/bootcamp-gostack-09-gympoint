import * as Yup from 'yup';
import Student from '../models/Student';
import HelpOrder from '../models/HelpOrder';

import HelpOrderAnswerConfirmationMail from '../jobs/HelpOrderAnswerConfirmationMail';
import Queue from '../../lib/Queue';

class AnswerController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: {
        answer: null,
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
    const { id } = req.params;

    const helpOrderExists = await HelpOrder.findByPk(id);
    if (!helpOrderExists) {
      return res.status(400).json({ error: 'Help Order does not exists.' });
    }

    if (helpOrderExists.answer && helpOrderExists.answer.length > 0) {
      return res.status(400).json({ error: 'Question already was answered.' });
    }

    const register = { ...req.body, answer_at: new Date() };

    const schema = Yup.object().shape({
      answer: Yup.string().required(),
      answer_at: Yup.date().required(),
    });

    if (!(await schema.isValid(register))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    await helpOrderExists.update(register);

    const helpOrder = await HelpOrder.findByPk(id, {
      attributes: ['id', 'question', 'answer', 'answer_at'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    await Queue.add(HelpOrderAnswerConfirmationMail.key, {
      helpOrder,
    });

    return res.json(helpOrder);
  }
}

export default new AnswerController();
