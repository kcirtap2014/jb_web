var express = require('express');
var router = express.Router();
var dates = require('../public/data/dates.json');
const fs = require('fs');

function redirect2contact(){
  $.post("/send_form").then(function(data) {
    window.location.href = "/contact";
  } );
}

/* GET home page. */
router.get('/', function(req, res, next) {

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var cur_date = new Date()

  dates["dates"].forEach(function(item) {
    item.date = new Date(item.date)
    item.isActive = item.date > cur_date
    item.str_date = item.date.toLocaleDateString('fr-FR', options)
  })
  res.render('index', { title: 'Introduction', dates: dates["dates"] });
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Bio' });
});

router.get('/media', function(req, res, next) {
  images_dir = fs.readdirSync('./public/galleries/')
  images_dir = images_dir.filter((item) => item != '.DS_Store')
  videos_dir = fs.readdirSync('./public/videos/')
  videos_dir = videos_dir.filter((item) => item != '.DS_Store')
  
  const l_img = images_dir.length
  const npcol =  Math.ceil(l_img/4)

  const l_vid = videos_dir.length
  const npcol_vid =  Math.ceil(l_vid/2)

  res.render('gallery', { title:'Media', 
                          images_dir: images_dir,
                          videos_dir:videos_dir, 
                          npcol: npcol, n_img:l_img, 
                          npcol_vid: npcol_vid, n_vid:l_vid });
});

// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'Contact' });
// });

// router.post('/contact', function(req, res, next) {
//   res.render('contact', { title: 'Contact' });
// });

/* GET users listing. */
// router.post('/send_form', function(req, res, next) {
 
//   console.log(req.body.email + " " + req.body.message);

//   const transporter = nodemailer.createTransport({
//     port: 465,               // true for 465, false for other ports
//     host: "smtp.gmail.com",
//        auth: {
//             user: 'xxx',
//             pass: 'yyy',
//          },
//     secure: true,
//     });
//   var mailOptions = {
//       from: req.body.email,
//       to: 'lee.patrickmunseng@gmail.com',
//       subject: '[WEBSITE] Julien + 1 '+ req.body.email + " " + req.body.name,
//       text: req.body.message
//   }
//   transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//           console.log(error);
//       } else {
//           res.send(`<script>alert("Email Sent Successfully.")</script>`);
//         }
//   })
//   //res.redirect(307, "/contact")
// });


module.exports = router;
