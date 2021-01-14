const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');

// @route     POST api/users
// @desc      regsiter a new user
// @access    public
const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email: email })

    
    if(userExists){
        res.status(400);
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else{
        res.status(400);
        throw new Error('Invalid user data')
    }
})

// @route     POST api/users/login
// @desc      auth user and get token
// @access    public
const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email })

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
})

// @route     GET api/users/profile
// @desc      get user profile
// @access    private
const getUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else{
        res.status(404);
        throw new Error('User not found')
    }
})

module.exports = {
    authUser: authUser,
    getUserProfile: getUserProfile,
    registerUser: registerUser
};