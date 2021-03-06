const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    userid:{
        type : String,
        unique: true,
        required : true
    },
    password:{
        type : String,
        // required: true
    },
    // confirmpass:{
    //     type : String,
    //     required: true
    // },
    stockVal: {
        type : Number,
        default : 0
    },
    cash :{
        type: Number,
        default: 1000000
    },
    since:{
        type: Date,
        default: Date.now
    }
})

const userdb = mongoose.model('userdb',schema);

module.exports= userdb;