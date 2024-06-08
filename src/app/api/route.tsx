export async function POST(request: Request) {
    let nodemailer = require('nodemailer')
    const res = await request.json()
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'creiaisoftworks@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    })

    const mailData = {
        from: 'creiaisoftworks@gmail.com',
        to: 'juanantoniofiguera@gmail.com',
        subject: `Message From ${res.name}`,
        text: res.message + " | Sent from: " + res.email,
        html: `<div>${res.message}</div><p>Sent from:
        ${res.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })

    return Response.json({ res })
}