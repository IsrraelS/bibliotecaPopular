import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Conectado a MongoDB"); 
        }
    } catch (error) {
        console.error("Error al conectar a MongoDB", error);
        process.exit(1);
    }
};
