import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique : true,
        validate : validator.isEmail
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength : [6, "Password Must Be Atleast 6 characters"]
    },
    transactions: {
        type: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("users", userSchema);

export default  User;