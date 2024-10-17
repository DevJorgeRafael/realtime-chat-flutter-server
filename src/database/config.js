import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;

        await mongoose.connect(MONGO_URI);
        console.log('>>>DB IS CONNECTED')

    } catch (error) {
        console.log("Error in db connection: ", error.message);
        
    }
}