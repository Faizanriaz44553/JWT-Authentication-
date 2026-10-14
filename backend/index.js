import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import dbConnection from "./config/db.js";
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import authRoutes from "./routes/authRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', ((req, res) => {
    try {
        res.status(200).send('welcome to backend')
    } catch (error) {
        res.status(400).send('some thing want wrong')
    }
}))

app.use('/api/auth', authRoutes);


const MONGODB_URI = process.env.MONGODB_URI
dbConnection(MONGODB_URI);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});