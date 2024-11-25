import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'powerdigital.fr@gmail.com',
    pass: 'fgwdvzknlxhfndap'
  }
});

export { transporter };
