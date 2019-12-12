import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentChangesMail {
  get key() {
    return 'EnrollmentChangesMail';
  }

  async handle({ data }) {
    const { enrollment } = data;

    const formattedStartDate = format(
      parseISO(enrollment.start_date),
      'dd/MM/yyyy',
      {
        locale: pt,
      }
    );
    const formattedEndDate = format(
      parseISO(enrollment.end_date),
      'dd/MM/yyyy',
      {
        locale: pt,
      }
    );

    Mail.sendMail({
      to: `${enrollment.student.name} <${enrollment.student.email}>`,
      subject: 'Confirmação de Alterações da Matrícula',
      template: 'enrollmentchanges',
      context: {
        student: enrollment.student.name,
        plan: enrollment.plan.title,
        period: `${formattedStartDate} à ${formattedEndDate}`,
        duration: enrollment.plan.duration,
        price_unit: enrollment.plan.price,
        price_total: enrollment.price,
      },
    });
  }
}

export default new EnrollmentChangesMail();
