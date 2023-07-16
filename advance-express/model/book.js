const Joi=require('joi');
const mongoose = require('mongoose');


const Book=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    }
})

function bookValidator(data){
    console.log({data});
    const schema=Joi.object({
        name:Joi.string().min(3).required()
    })

    return schema.validate(data)

}

exports.Book=Book
exports.bookValidator=bookValidator