const express = require('express');
const User = require('../models/user.model');
const auth = express.Router();
const jwt = require("jsonwebtoken");

// login user
auth.post('/login', function (req, res) {
    User.findOne({
        email: req.body.email
      })
      .exec((err, user) => {
        if (err) {
          res.status(500)
            .send({
              message: err
            });
          return;
        }
        if (!user) {
          return res.status(404)
            .send({
              message: "User Not found."
            });
        }
  
        //comparing passwords
        if(req.body.password === user.password){
            passwordIsValid = true
        } else{
            passwordIsValid = false
        }
        // checking if password was valid and send response accordingly
        if (!passwordIsValid) {
          return res.status(401)
            .send({
              accessToken: null,
              message: "Invalid Password!"
            });
        }
        //signing token with user id
        var token = jwt.sign({
          id: user.id
        }, '6hey974YwCsRia4t', {
          expiresIn: 86400
        });
  
        //responding to client request with user profile success message and  access token .
        res.status(200)
          .send({
            user: {
              id: user._id,
              email: user.email,
              name: user.name,
            },
            message: "Login successfull",
            accessToken: token,
          });
      });
});


module.exports = auth;