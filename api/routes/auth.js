const express = require('express');
const router = express.Router();
const Auth= require('../../Controllers/auth');

//@route POST api/auth/register
//@description register  the users
//@access public route

router
    .route('/register')
    .post(Auth.AddUser);

//@route GET api/auth/login
//@description login  the users/ returning the jwt
//@access public route

router
    .route('/login')
    .post(Auth.LoginUser);


module.exports = router;