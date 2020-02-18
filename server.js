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

// MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
});

// Routes
const collectionsRouter = require('./routes/collections');
const photosRouter = require('./routes/photos');

app.use('/collections', collectionsRouter);
app.use('/photos', photosRouter);

// app.get('/trip/:name', (req, res) => res.send(req.params.name));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
