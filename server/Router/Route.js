import { Router } from "express";
const router = Router()
import * as Controller from '../Controller/Controller.js'

// POST methods
router.route('/register').post(Controller.register)
// router.route('/registerMail').post(); //send the email
router.route('/authenticate').post((req, res) => res.end()); 
router.route('/login').post(Controller.verifyUser, Controller.login); 

// GET methods
router.route('/user/:username').get(Controller.getUser) 
router.route('/generateOTP').get(Controller.generateOTP) 
router.route('/verifyOTP').get(Controller.VerifyOtp) 
router.route('/createResetSession').get(Controller.createResetSession) 

// PUT methods
router.route('/updateUser').put(Controller.updateUser); 
router.route('/resetPassword').put(Controller.resetPassword) 


export default router