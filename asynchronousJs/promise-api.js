//  already resolve , unit test 

// already resolve
//  const p=Promise.resolve({id:1})

//  p.then((result)=>console.log(result));
// already rejected
//  const p2=Promise.reject(new Error('rejected cause here'))

//  p2.catch((err)=>console.log(err.message));


//  parallel promises running

const p1= new Promise((resolve)=>{
    resolve(1)
})
const p3= new Promise((resolve)=>{
    resolve(3)
})
const p4= new Promise((resolve)=>{
    resolve(4)
})

const p5= new Promise((resolve,reject)=>{
    reject(new Error('rejected cause here'))
})

// promose.all() -> when all promises are resolved or rejected then execute.

Promise.all([p1, p3, p4,p5]).then((result)=>console.log(result)).catch((err)=>console.log(err.message))

//race =>any promise which is resolve return first.....
Promise.race([p1, p3, p4,p5]).then((result)=>console.log(result)).catch((err)=>console.log(err.message))