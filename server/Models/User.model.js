import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please provide a unique Username'],
        unique: [true, "Username Exist" ]
    },
    password: {
        type: String,
        requyired: [true, "Please provide a password"],
        unique: false
    },
    email: {
        type: String,
        required: [true, "Please provide a unique Email"],
        unique: true
    }
})

export default mongoose.model.Users || mongoose.model('User', UserSchema);