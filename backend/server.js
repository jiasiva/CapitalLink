import app from './app.js';
import express from "express";
import cors from "cors";


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

/*
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // ✅ Required for req.body to work

app.use('/api/auth', authRoutes); // ✅ Signup/Login route

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/