var express = require('express');
var router = express.Router();
var nodeMailer = require('nodemailer');
const transporter = nodeMailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  //port: 993,
 // requireTLS: false,
 // secure: false,  //true for 465 port, false for other ports
  auth: {
    user: 'platinumvrs@gmail.com',
    pass: '**Mesam5290264**'
  },
  tls: {
  rejectUnauthorized: false
  // ciphers:'SSLv3'
//  cipher:'SSLv3'
  }
});

/* GET home page. */
router.get('/:emailid', function(req, res, next) {
 // res.render('index', { title: 'Express' });
console.log(req.params.emailid);

const mailOptions = {
  from: '"Your Name" platinumvrs@gmail.com', // sender address
  to: req.params.emailid, // list of receivers
  subject: 'Hello ', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>This is working! It is lunch timesss!</b>' // html body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
  return  console.log(error);
    res.status(400).send({success: false})
  } else {
    res.status(200).send({success: true});
  //  console.log(res)
  }
});



});

module.exports = router;
