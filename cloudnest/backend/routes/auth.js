const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a user using POST "/api/auth/createUser", doesn't require authentication
router.post('/createUser', [
    //directly code copied from express validator documentation
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', "Enter a valid Email").isEmail(),
  body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
   //If there are errors then return bad request 400 and the errors 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    //check if the user with this email already exists
    let user =  await User.findOne({ email: req.body.email});
    if(user){
        return res.status(400).json({ error:'Sorry user with this email already exists'})    
    }
    //creating a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    res.json(user);
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ error: 'Email already exists' ,message:error.message});
    }
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;