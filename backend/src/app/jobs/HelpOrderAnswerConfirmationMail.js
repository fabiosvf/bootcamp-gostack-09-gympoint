import { format, parseISO } from 'date-fns';
import Mail from '../../lib/Mail';

class HelpOrderAnswerConfirmationMail {
  get key() {
    return 'HelpOrderAnswerConfirmationMail';
  }

  async handle({ data }) {
    const { helpOrder } = data;

    Mail.sendMail({
      to: `${helpOrder.student.name} <${helpOrder.student.email}>`,
      subject: 'Confirmação de Resposta para Pedidos de Auxílio',
      template: 'helporderanswerconfirmation',
      context: {
        student: helpOrder.student.name,
        question: helpOrder.question,
        answer: helpOrder.answer,
        answer_at: format(parseISO(helpOrder.answer_at), 'dd/MM/yyyy'),
      },
    });
  }
}

export default new HelpOrderAnswerConfirmationMail();
