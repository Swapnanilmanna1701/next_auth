import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "please give an username"],
        unique:true
    },
    email:{
        type:String,
        required:[true, "please give an email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "please give an username"],
        
    },
    isVerified:{
        type:Boolean,
        default: false,
    },
    isAdmin:{
        type:Boolean,
        default: false,
        
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date

});




const User = mongoose.models.user || mongoose.model("User", userSchema);

export default User;