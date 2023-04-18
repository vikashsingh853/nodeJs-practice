/*

promise:---> it is an object which holds an eventual result of an asynchronous operation
-->it either returns a reullt or an error

three state :
pending-> when create promise
fulfilled-> when a promise is fulfilled or returned result 
rejected-> when a promise is rejected or error.

*/

// ctreate promise
//  resolve and reject are functions.
const promise =new Promise((resolve,reject)=>{

    // resolve(1)
    // reject()
// or
       // some async work here

       setTimeout(()=>{
            resolve(1); // when a promise is fulfilled or resolved ( pending -> resolve/fulfilled state)
        //    reject(new Error('message')) // when a promise is reject ( pending -> reject state)
       },2000)

})

// consume promise

promise.then(result=>console.log(result)).catch(err=>console.log(err.message))