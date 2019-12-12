import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const plans = await Plan.findAll({
      order: ['duration'],
      attributes: ['id', 'title', 'duration', 'price'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(plans);
  }

  async store(req, res) {
    const register = req.body;

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .required()
        .positive()
        .integer(),
      price: Yup.number()
        .required()
        .positive(),
    });

    if (!(await schema.isValid(register))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const planExists = await Plan.findOne({
      where: { title: register.title },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plan already exists.' });
    }

    const { id, title, duration, price } = await Plan.create(register);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async update(req, res) {
    const register = req.body;

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .required()
        .positive()
        .integer(),
      price: Yup.number()
        .required()
        .positive(),
    });

    if (!(await schema.isValid(register))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title } = register;

    const plan = await Plan.findByPk(req.params.id);

    if (title !== plan.title) {
      const planExists = await Plan.findOne({ where: { title } });

      if (planExists) {
        return res.status(400).json({ error: 'Plan already exists.' });
      }
    }

    const { id, duration, price } = await plan.update(register);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const plan = await Plan.findByPk(id);

    if (plan == null) {
      return res.status(400).json({ error: 'Plan does not exists' });
    }

    await plan.destroy();

    const { page = 1 } = req.query;

    const plans = await Plan.findAll({
      order: ['duration'],
      attributes: ['id', 'title', 'duration', 'price'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(plans);
  }
}

export default new PlanController();
