const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express();

const allowedOrigins = ['http://localhost:8081', 'http://localhost:8082'];

app.use(cors({
    origin: allowedOrigins,
}));

app.use(express.json());

app.use('/api', routes);


app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
});

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Start the client and admin
const { exec } = require('child_process');

exec('npm run serve --prefix client', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});

exec('npm run serve --prefix admin', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});
