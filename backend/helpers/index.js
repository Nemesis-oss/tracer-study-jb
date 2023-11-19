import nodemailer from "nodemailer";

export const kirimEmail = dataEmail => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS:true,
        auth: {
            user: "debrittokolose@gmail.com",
            pass: "wqxe rsfe aeor nxzz"
        }
    });

    return (
        transporter.sendMail(dataEmail)
            .then(info => console.log(`email terkirim: ${info.message}`))
            .catch(err => console.log(`terjadi kesalahan: ${err}`))
    );
};
