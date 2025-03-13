import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoose connected !! DB host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGOOSE connection ERROR:", error);
        process.exit(1);
        throw error;
    }
}
export default connectDB;