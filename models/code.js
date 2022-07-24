const mongoose = require('mongoose')
const codeSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    limit: {
        type: Number, 
        require: true
    }
})
module.exports = mongoose.model('Codes', codeSchema)