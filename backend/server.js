import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Lead from './models/Lead.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/voca_db';
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB locally!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/join-waitlist', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Check if it already exists
    const existing = await Lead.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'Email is already on the waitlist' });
    }

    const newLead = new Lead({ email });
    await newLead.save();

    res.status(201).json({ message: 'Successfully joined the waitlist!' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while joining the waitlist' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
