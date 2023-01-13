const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'r.jisha@gmail.com',
        pass: '*******'
    }
})

let details={
    from: 'r.jisha@gmail.com',
    to: 'rs.jisha2008@gmail.com',
    subject:  'Testing Nodemailer',
    html: "<b><h1>Welcome</h1> <br> Hello world?<br><p>This is sample mail test</p> </b>"    
}

mailTransporter.sendMail(details, (err)=>{
    if(err)
    {
        console.log('Error found', err);
    }
    else
    {
        console.log('mail sent successfuly');
    }
})

