var express = require('express');
var router = express.Router();

// GET profile page
router.get('/', function(req, res, next) {
  // Contoh data pengguna
  const user = {
    name: 'John Doe',
    nim: '123456789',
    email: 'john.doe@example.com',
    address: '123 Main Street, Anytown, AN 12345'
  };

  res.render('profile', { 
    title: 'Profile Page',
    user: user 
  });
});

module.exports = router;