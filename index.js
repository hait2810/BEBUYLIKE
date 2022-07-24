const express = require('express')
const cors = require('cors')
app.use(cors());
const mongoose = require('mongoose');
const routerCode = require('./routes/code');
const routerToken = require('./routes/token');
const url = "mongodb+srv://haibrave:ahai2001@cluster0.gqzej.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
    try {
        await mongoose.connect(url);
        console.log("connect succsess");
        

    } catch (error) {
        console.log(error);
    }
}
connect()


const app = express()
app.use(express.json())
app.use(routerCode)
app.use(routerToken)


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("đang chạy cổng", PORT);
})