import { number } from "framer-motion";
import mongoose from "mongoose";
const Mongoose = mongoose.Schema;

const UserSchema = new Mongoose({
  name: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false },
  password2: { type: String, required: false },
  data: { type: Date, default: Date.now },
});
export default mongoose.model("Register", UserSchema);
