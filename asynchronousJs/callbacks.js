

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


// callback hell ------------------------------
// nested asynchnous function create callback hell which is difficult to read and manage.....

/*
solution................................................................

make anonymous function to named function and pass refrence to callback

example:
callback hell ------------------------------

getUser(1,(user)=>{
    getrepo(user,(repo)=>{
        getcommits(repo,(commits)=>{
            console.log(commits)
        })
    })
})

sol :
getUser(1,getRepo);

function getRepo(user){
    getrepo(user,getCommits)
}

function getCommits(repo){
 getcommits(repo,displayCommits)
}

function displayCommits(commits){
   console.log(commits)
}



*/