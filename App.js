const nodemailer = require('nodemailer')

let transport = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'priyankakhamkar3456@gmail.com',
            pass:'bgnc zndj kvbj hsqp'
        }
    }
)

//send out email

let mailOptions = {
    from:'priyankakhamkar3456@gmail.com',
    to:'priyankakhamkar352@gmail.com',
    subject:'Email Generation in NodeJs',
    html:'<h1>Hello This is Email Testing</h1>',
    attachments:[
        {
            filename: 'image.jpg',
            path: 'image.jpg'
        },
        {
            filename: 'PDF.pdf',
            path: 'Logic Gates.pdf'
        }
    ]
}

transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log("Error Occured" + error)
    }else{
        console.log("Email Sent Successfully" + info.response)
    }
})