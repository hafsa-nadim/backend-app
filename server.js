const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace with your Atlas URI)
mongoose.connect('mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/crud?retryWrites=true&w=majority');

// Simple Model
const Item = mongoose.model('Item', { name: String });

// Routes
app.get('/api/items', async (req, res) => {
  res.json(await Item.find());
});

app.post('/api/items', async (req, res) => {
  res.json(await Item.create(req.body));
});

app.listen(5000, () => console.log('Server running on port 5000'));