const User = require('../models/user');
const crypto = require('crypto');
const jwtoken = require('jsonwebtoken');
require('dotenv').config();

createUser = async (req, res) => {
    await User.create({
        email: req.body.email,
        password: crypto.createHash('md5').update(req.body.password).digest("hex"),
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).send({
            message: err.message || "Something wrong while creating the user."
        });
    });
};

generateAccessToken = (email) => {
    return jwtoken.sign({data:email}, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

exports.signUp = async (req, res) => {
    if (await User.findOne({ where: { email: req.body.email } })) {
      res.status(401).send({message:'Email already associated to a user !'});
    }
    else {
      createUser(req, res);
    }
}

exports.login = async (req, res) => {
    await User.findOne({ where: { email: req.body.email } })
    .then( user => {
        if (user.password === (crypto.createHash('md5').update(req.body.password).digest("hex"))) {
            let token = generateAccessToken(user.email);
            res.status(200).json({user: user, token: token});
        }
        else {
            res.status(401).send("Wrong credentials, please verify !");
        }
    })  
    .catch(() => { 
        res.status(406).send('Query failed !');
    });
}