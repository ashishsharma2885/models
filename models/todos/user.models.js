import mongoose from "mongoose"

new userSchema = new mongoose.Schema(
{
  username: {
    tyep: String,
    required: true,
    unique: true,
    lowercase: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true}
)

export const User = mongoose.model("User", userSchema)