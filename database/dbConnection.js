import mongoose from 'mongoose'
import "dotenv/config";

export default async function () {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        await mongoose.connect(MONGO_URI, {
          dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
        });
        mongoose.set("debug", true);
        console.log("MongoDB: connected");
    } catch (e) {
        console.error("MongoDB: ", e);
    }
}