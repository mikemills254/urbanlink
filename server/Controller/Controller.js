import UserModel from "../Models/User.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ENV from '../config.js'
import Otp from 'otp-generator'

/** middleware to authenticate user*/
export async function verifyUser(req, res, next){
    try {
        const { email } = req.method == 'GET' ? req.query : req.body

        let exist = UserModel.findOne({ email })
        if(!exist) return res.status(404).send({error: 'User not found, please create an account first'})
        next()

    } catch (error) {
        return res.status(404).send({ error: 'Cannot Authenticate user' })
    }
}

export async function register(req, res) {
    try {
        const { username, password, email } = req.body;
    
        const existingUsername = await UserModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ error: "Username already in use." });
        }
    
        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email Address already in use." });
        }
    
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
    
            const user = new UserModel({
            username,
            password: hashedPassword,
            email,
            });
    
            await user.save();
    
            return res.status(201).json({ msg: "User registered successfully." });
        }
    } catch (error) {
        return res.status(500).json({ error: "Internal server error." });
    }
}

export async function login(req, res) {
    const {email, password} = req.body;
    try {
        UserModel.findOne({ email })
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(passwordChecked => {
                        if(!passwordChecked) return res.status(400).send('Dont have password')

                        const token = jwt.sign({
                            userId: user._id,
                            username: user.username,
                        }, ENV.JWT_TOKEN, { expiresIn : '24h' })

                        

                        return res.status(200).send({
                            msg: 'Login Successful....!',
                            username: user.username,
                            token
                        })
                    })
            }).catch(error => {
                return res.status(400).send({error: 'Incorrect password'})
            })
    } catch (error) {
        return res.status(500).send({error: 'Account is not available, please create one'})
    }
}

export async function getUser(req, res) {
    const { username } = req.params; // Extract username from URL parameters

    try {

        if (!username) return res.status(500).send({ error: 'The username is incorrect' });

        let user = await UserModel.findOne({ username });
        if (!user) return res.status(404).send({ error: 'User has not been found' });

        const { password, ...rest} = Object.assign({}, user.toJSON())

        return res.status(200).send(rest);
    } catch (error) {
        return res.status(500).send({ error: 'An error occurred while fetching the user' });
    }
}


export async function updateUser(req, res) {
    res.json('Update User')
}

export async function generateOTP(req, res) {
    req.app.locals.OTP = await Otp.generate(6, {upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false})
    res.status(201).send({code: req.app.locals.OTP})
}

export async function VerifyOtp(req, res) {
    const { code } = req.query;
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null,
        req.app.locals.resetSession = true
        
        return res.status(201).send({ msg: 'OTP has been verified' });
    }
    
    return res.status(401).send({ error: "Invalid OTP" });
}

export async function createResetSession(req, res) {
    if(req.locals.resetSession){
        req.locals.resetSession = false

        return res.status(201).send({ msg: "Access Granted "})
    }
    return res.status(401).send({msg: 'Session Expired'})
}

export async function resetPassword(req, res) {
    try {
        if (!req.app.locals.resetSession) return res.status(401).send({ msg: 'Session Expired' });
        const { email, password } = req.body;
        
        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(404).send({ error: 'User not found' });
            }
            
            const hashedPassword = await bcrypt.hash(password, 10);
            await UserModel.updateOne({ email: user.email }, { password: hashedPassword });
            
            return res.status(201).send({ msg: 'User has been updated' });
        } catch (error) {
            return res.status(500).send({ error: 'Internal server error' });
        }
    } catch (error) {
        return res.status(500).send({ error: 'Internal server error' });
    }
}


