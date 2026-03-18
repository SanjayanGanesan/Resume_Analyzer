const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = express();

app.use(express.json());

// global request logger
app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.url);
    next();
});

const resumeRouter = require('../routes/resume.routes');

app.get('/health', (req, res) => {
    res.send('API Running Successfully');
});

app.use('/api/resume', resumeRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is Running in ${PORT}`);
});