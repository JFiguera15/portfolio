export async function POST(request: Request) {
  let nodemailer = require('nodemailer')
  const res = await request.json()
  const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
          user: process.env.email,
          pass: process.env.password,
      },
      secure: true,
  })

  await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              resolve(success);
          }
      });
  });

  const mailData = {
      from: 'creiaisoftworks@gmail.com',
      to: 'juanantoniofiguera@gmail.com',
      subject: `Message From ${res.name}`,
      text: res.message + " | Sent from: " + res.email,
      html: `<div>${res.message}</div><p>Sent from:
      ${res.email}</p>`
  }

  await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              resolve(info);
          }
      });
  });

  return Response.json({ res })
}