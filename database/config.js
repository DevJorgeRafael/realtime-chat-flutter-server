import mongoose from "mongoose";

export const dbConnection = async () => {
    try {


    } catch (error) {
        console.log("Error in db connection", error);   
        throw new Error("Error in db connection");     
    }
}