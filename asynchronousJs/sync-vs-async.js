
// async

console.log('before');

const user= getUser(1);
console.log(user);

console.log('after');

function getUser(id){
    setTimeout(()=>{
        console.log('reading after settimeout');
        return {id:id,name:'vks'};
    },2000)
}



// patterns for dealing with asynchnous

//callbacks
// promises
// async/await