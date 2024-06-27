import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./route/book.route.js"
import userRoute from "./route/user.route.js";
import cors from "cors";
//cors is used because we use our frontend and backend at different ports (frontend 3000 server 4000) which do not able access to data without using cors in backend for safety of dtata
const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


//defining rotes
app.use("/book",bookRouter);
app.use("/user", userRoute);

// app.listen(3000)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});