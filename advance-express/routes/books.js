const express=require('express');
const app = express();
app.use(express.json()) //moddleware
const mongoose = require('mongoose');
const {Book , bookValidator } = require('../model/book')

mongoose.connect("mongodb://localhost:27017/books", { useNewUrlParser: true })
.then(()=>console.log('connected mongodb'))
.catch(err=>console.error('error connecting mongodb'))



const Books=mongoose.model('Books',Book);

app.get('/',(req, res)=>{
    res.send('Welcome!!!sddwdsdfvn dve')
});

app.get('/api/books',async(req,res)=>{
    const books=await Books.find()
    if(!books.length) return res.status(404).send('books not found');
    res.send(books)
})

app.get('/api/books/:id', async(req,res)=>{
    const book=await Books.findById(req.params.id)
    if(!book) res.status(404).send('given id book not found');
    res.send(book)
})

app.post('/api/books',async(req,res)=>{
    console.log({req});
    const {error}=bookValidator(req.body);
    if(error) return res.status(400).send(error.details[0].message);
   let books=await Books.create({name:req.body.name})
   books=await books.save();
    res.status(200).send(books);
})


app.put('/api/books/:id',async(req,res)=>{
 
    const {error}=bookValidator(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const book=await Books.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
    if(!book) res.status(404).send('given id book not found');
    res.status(200).send(book)
})



app.delete('/api/books/:id',async(req,res)=>{
    const book= await Books.findByIdAndRemove(req.params.id)
    if(!book) return res.status(404).send('given id book not found');
    res.status(200).send(book)
})

// PORT
const port=process.env.PORT ||3000
app.listen(port,()=>console.log(`listning on port ${port}....`));