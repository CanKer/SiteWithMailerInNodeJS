var express     = require('express'),
    router      = express.Router(),
    nodemailer   = require('nodemailer')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('contact', { title: 'Contact' })
})
router.post('/send', (req, res, next) =>  {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "cdialike@gmail.com",
        pass: ".01463588xZith666$$$"
    }
  })
  const mailOptions = {
    from  : req.body.name +'<canker@gmail.com>',
    to : 'cdialike@gmail.com',
    subject:  'nuevo correo del sitio',
    text  : 'tienes un nuevo correo de '+req.body.name+' de correo '+req.body.email+' y mensaje '+req.body.mensaje,
    html  : '<p>tienes un nuevo correo de: </p><ul><li>Nombre: '+req.body.name+'</li><li>Correo: '+req.body.email+'</li><li>Mensaje: '+req.body.mensaje+'</li></ul>'
  }
  transporter.sendMail(mailOptions, (err, inf) => {
    if(err){
      console.log(err)
      res.redirect('/')
    }
    else {
      console.log(`Mensaje enviado: ${inf.response}`)
      res.redirect('/')
    }
  })
})


module.exports = router
