import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB is connected');
    } catch (error) {
        console.log(`Database is not connected${error}`);
    }
};

export default connectDB;
