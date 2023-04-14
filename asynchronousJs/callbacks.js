

//callback is a function that is called when the async operation is ready

console.log('before');

getUser(1,logUser);


console.log('after');

function getUser(id,callback){
    setTimeout(()=>{
        console.log('reading after settimeout');
        callback({id:id,name:'vks'});
      
    },2000)
}

function logUser(user){
    console.log(user);
}