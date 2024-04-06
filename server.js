
let nodemailer = require("nodemailer")
function sendmail(from,pass,to,subject,text){
    let transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user: from,
        pass: pass
        }
    
    })
    
    let mailoption = {
        from:from,
        to:to,
        subject:subject,
        text:text
    }
    
    transporter.sendMail(mailoption,(error,info)=>{
      if(error){
        console.log(error)
      }
      else{
        console.log("Email send🙌", info.response)
      }
    })
}

module.exports = sendmail