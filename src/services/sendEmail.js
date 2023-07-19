require('dotenv/config')
const {createTransport}=require('nodemailer')

function sendEmail(content){
    const transporter=createTransport({
        host:'smtp.gmail.com',
        service:'gmail',
        secure:true,
        auth:{
            user:process.env.EMAIL_REACTX,
            pass:process.env.PASSWORD_EMAIL
        }
    })

    const emailToBeSent={
        from:process.env.EMAIL_REACTX,
        to:process.env.RECEIVER_EMAIL,
        subject:`Contato de ${content.name}`,
        text:`${content.email}\n\n${content.message}`
    }

    transporter.sendMail(emailToBeSent,(err)=>{
        if(err){
            console.log('Email sending failure')
            return
        }

        console.log('email sent')
    })
}

module.exports=sendEmail