const os = require('os');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const hostname = os.hostname();
    res.send(`This server is speaking from ${hostname}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
