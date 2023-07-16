const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/playground", { useNewUrlParser: true })
.then(()=>console.log('connected mongodb'))
.catch(err=>console.error('error connecting mongodb'))

const courseSchema=mongoose.Schema({
    name:String,
    author:String,
    date:{type : Date,default:Date.now},
    isPublished:Boolean,
    tags:[String]

})
const Course= mongoose.model('Course',courseSchema);

async function createCourse(){

    
    const course=new Course({
        name:'mongodb',
        author:'tamsil',
        tags:['backend','database'],
        isPublished:true,
    });
    
    const result= await course.save();
    console.log(result);
} 

async function getCourse(){
const courses=await Course.find().limit(2).sort({name:1}).select({name:1,tags:1});
console.log(courses);
}

// createCourse();

getCourse()