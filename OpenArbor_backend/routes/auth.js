import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    try {
        //check if username already exists
        const checkUser = await User.findOne({ username: req.body.username });
        if (checkUser) {
            res.status(400).json("Username already exists!");
            return;
        }

        // Generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
        });

        // Save user and respond
        const user = await newUser.save();
        res.status(200).send(user._id);
    } catch (err) {
        res.status(500);
    }
});

// Login
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json("Wrong username or password!");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong username or password!");

        res.status(200).json({ _id: user._id, username: user.username });
    } catch (err) {
        res.status(500).json(err);
    }

});

export default router;