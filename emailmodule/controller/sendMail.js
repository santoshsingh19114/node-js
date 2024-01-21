const nodemailer = require("nodemailer");

const sendMial =async(req,res)=>{

    //connect with smtp 
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jaydon.kling@ethereal.email',
            pass: '1RSNXqq55bF4z5vJDv'
        }
    });



    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <sk1155610@gmail.com>', // sender address
        to: " santoshsingh19114@gmail.com", // list of receivers
        subject: "Hello santosh", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world? mail aaya kya </b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
    res.json(info);
};

module.exports=sendMial;