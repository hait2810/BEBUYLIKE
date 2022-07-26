const mongoose = require('mongoose')
const keySchema = new mongoose.Schema({
    name: {
        type:String,
        require: true
    }
})
module.exports = mongoose.model('keys', keySchema)