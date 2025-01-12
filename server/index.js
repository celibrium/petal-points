require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// OpenAI API
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const client = new OpenAI();
console.log(process.env.OPENAI_API_KEY); // Ensure it prints the API key


app.post('/api/openai', (req, res) => {
    client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "You are a helpful pet that can help user create tasks relating to the prompt. Keep your responses limited to 50 words or less."},
            {"role": "user", "content": req.body.message}
        ],
    })
    .then((result) => {
        res.json({ result });
    })
    .catch((error) => {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});
const port = process.env.PORT || 5001;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});