const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose');
const routerCode = require('./routes/code');
const routerToken = require('./routes/token');
const routerKeys = require('./routes/key');
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
app.use(cors());
app.use(express.json())
app.use(routerCode)
app.use(routerToken)
app.use(routerKeys)


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("đang chạy cổng", PORT);
})