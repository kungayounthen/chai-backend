import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`)
    } catch (e) {
        console.log('MONGODB connection failed!', e);
        process.exit(1);
    }
}

export default connectDB;