import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/trip/:name', (req, res) => res.send(req.params.name))

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
