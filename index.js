const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

const PORT = process.env.PORT || 8723;

const userRoutes = require('./routes/userRoutes');
app.use("/api/v1", userRoutes);

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/v1", contactRoutes);

app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`)
})


const dbConnect = require('./config/db');
dbConnect();