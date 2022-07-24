const mongoose = require('mongoose')
const tokenSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true
    }
})
module.exports = mongoose.model('Tokens', tokenSchema)