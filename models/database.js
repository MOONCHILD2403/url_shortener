const monkey = require("mongoose");

const myschema = new monkey.Schema({
    longurl:{
        type:String,
        required:true
    },
    shorturl:{
        type:String,
        required:true,
        unique:true
    },
    visithistory:[{
        timestamp:{
            type:String
        }
    }],
    clicks:{
        type:Number,
    },
    last_visited:{
        type:String,
        default:"never"
    }
},{timestamps:true})

const user = monkey.model("tinyurl",myschema);

module.exports = user;

