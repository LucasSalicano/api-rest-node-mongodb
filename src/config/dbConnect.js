import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join('.env')});

mongoose.connect(process.env.DB_HOST);

export default mongoose.connection;