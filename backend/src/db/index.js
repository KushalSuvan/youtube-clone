import mongoose from 'mongoose';
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`MongoDB connected!!!\nDB_HOST: ${connectionInstance.connection.host}\n`);
    } catch (error) {
        console.log('MongoDB connection FAILED\n', error);
        process.exit(1);
    }
}

export default connectDB;