import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const MONGO_URI = process.env.MONGODB_URL;

    if (!MONGO_URI) {
        console.error('MONGODB_URL environment variable is not defined');
        process.exit(1);
    }
    
    try {

        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
        process.exit(1);
    }
}

export default DBConnection;
