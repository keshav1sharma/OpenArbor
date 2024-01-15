import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
    });

export default mongoose.model("User", UserSchema);