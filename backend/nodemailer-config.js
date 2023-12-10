import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sdhoudjadji.docs@gmail.com',
    pass: '04270215M-v'
  }
});

export { transporter };