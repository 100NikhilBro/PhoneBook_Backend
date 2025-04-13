const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { console.log("Connected Successfully") }).catch((e) => {
        console.log(`Failed to connect and Error is --------> ${e}`)
    })
}


module.exports = dbConnect;