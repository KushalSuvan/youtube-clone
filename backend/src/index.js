import connectDB from "./db/index.js";


connectDB();




// Below is an IIFE implementation of the application bootstrapping
// import mongoose from 'mongoose';
// import express from 'express';
// const app = express();

// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//         app.on("error", (error) => {
//             console.error("EXPRESS APP ERROR: ", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw error;
//     }
// })();