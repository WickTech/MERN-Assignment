const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


    app.use('/api', require('./routes/transacrions'));

    app.get('/', (req, res) => {
        res.status(200).send("Welcome");
    });
    

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });