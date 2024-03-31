import mongoose from "mongoose";

export function dataBaseConnection(){
    const params = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try{
        mongoose.connect(process.env.MONGO_URL, params);
        console.log("MongoDB connected");
    }catch(error){
        console.log("MongoDB connection failed", error);
    }
}