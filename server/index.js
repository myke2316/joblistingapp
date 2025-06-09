import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {authenticationRouter} from './routes/authenticationRouter.js';
import { connectDb } from "./config/database.js";
import cookieParser from "cookie-parser";



dotenv.config();
connectDb()

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routes
app.use("/auth/user", authenticationRouter)

app.get('/', (req, res) => {
  res.send('Job Listing API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
