import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sdhoudjadji.docs@gmail.com',
    pass: 'wmfrmvitpccdcrzv'
  }
});

export { transporter };
