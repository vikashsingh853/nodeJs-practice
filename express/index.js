const express=require('express');
const Joi=require('joi');
const app = express();
app.use(express.json()) //moddleware

// app.get()
// app.put()
// app.post()
// app.delete();

app.get('/',(req, res)=>{
    res.send('Welcome!!!sddwdsdfvn dve')
});
app.get('/api/courses',(req, res)=>{
    res.send([1,1,1,1,1,2,2,2,2])
});

// PORT
const port=process.env.PORT ||3000
app.listen(port,()=>console.log(`listning on port ${port}....`));

// export PORT=5000 //setting port on commant line


/*
routes parameters

params-> essencial parameters
queryparams-> optonal parameters
*/

app.get('/api/posts/:year/:month',(req, res)=>{
    res.send({'params':req.params,'query':req.query})
})


// handling get request

const  books=[
    {name:'monster1',id:1},
    {name:'monster2',id:2},
    {name:'monster3',id:3},
    {name:'monster4',id:4},
    {name:'monster5',id:5},
]

app.get('/api/books',(req,res)=>{
    if(!books.length) return res.status(404).send('books not found');
    res.send(books)
})

app.get('/api/books/:id',(req,res)=>{
    const book=books.find((c)=>c.id===parseInt(req.params.id));
    if(!book) res.status(404).send('given id book not found');
    res.send(book)
})


// Handling post request

app.post('/api/books',(req,res)=>{

    // input validation
    // 400 bad request

    const {error}=bookValidator(req.body.name)
    if(error) return res.status(400).send(error.details[0].message)
 
   

    const book={
        id:books.length+1,
        name:req.body.name,
    }
    books.push(book)
    res.status(200).send(book)
})



// Handling put request

app.put('/api/books/:id',(req,res)=>{

    const book=books.find((c)=>c.id===parseInt(req.params.id));
    if(!book) res.status(404).send('given id book not found');

    // input validation
    // 400 bad request
    
    const {error}=bookValidator(req.body.name)
    if(error) return res.status(400).send(error.details[0].message)

    book.name=req.body.name
    res.status(200).send(book)
})



// validator

function bookValidator(name){
    const schema=Joi.object({
        name:Joi.string().min(3).required()
    })

    return schema.validate({name:name})

}




// handling delete request

app.delete('/api/books/:id',(req,res)=>{

    const book=books.find((c)=>c.id===parseInt(req.params.id));
    if(!book) return res.status(404).send('given id book not found');

    const index=books.indexOf(book);
    books.splice(index,1)

    res.status(200).send(book)
})