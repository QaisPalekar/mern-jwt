const { Router } = require('express');
const router = Router();
const authService = require('../services/auth');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/user');
const { generateToken } = require('../services/auth');

router.post('/signin', async function(req, res) {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(500).json({message: 'Provide and email and password'});
    }

    const user = await UserModel.findOne({ email }).exec();

    if(user) {
        user.comparePassword(password, function(err, isMatch) {
            if(err) {
                console.log(err)
            }
            if(isMatch) {
                const token = generateToken({ email })
                res.json({token});
            } else {
                res.status(500).json({ message: 'Incorrect password' });
            } 
        });
    } else {
        res.status(500).json({ message: 'No user found' });
    }

});

router.post('/signup', async function(req, res) {
    try {
        const user = await new UserModel(req.body).save()
        const token = generateToken({email: user.email})
        res.json({token});
    } catch (error) {
        res.status(500).json({message: "Something Went wrong", error});
    }
    
});




module.exports = router;