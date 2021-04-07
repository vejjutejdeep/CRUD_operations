const mongoose = require('mongoose');
// const Schema =  mongoose.schema

const starwarschema = new mongoose.Schema({
    name: {
        type:String
    },
    quote: {
        type:String
    },
});

const starwar = mongoose.model('quote', starwarschema) ;

module.exports = starwar;