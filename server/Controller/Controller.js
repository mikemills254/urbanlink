import UserModel from "../Models/User.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ENV from '../config.js'

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

export async function getUser(req,res){
    
    const { email } = req.params;

    try {
        
        if(!email) return res.status(501).send({ error: "Invalid email address"});

        UserModel.findOne({ email }, function(err, user){
            if(err) return res.status(500).send({ err });
            if(!user) return res.status(501).send({ error : "Couldn't Find the User"});

            return res.status(201).send(user);
        })

    } catch (error) {
        return res.status(404).send({ error : "Cannot Find User Data"});
    }

}

export async function updateUser(req, res) {
    res.json('Update User')
}

export async function generateOTP(req, res) {
    res.json('generateOtp Model')
}

export async function VerifyOtp(req, res) {
    res.json('VerifyOtp Model')
}

export async function createResetSession(req, res) {
    res.json('Reset Session model')
}

export async function resetPassword(req, res) {
    res.json('Reset Password Model')
}

