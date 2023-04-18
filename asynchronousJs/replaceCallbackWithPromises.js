//callbacks helll

// getUser(1,(user)=>{
//     getrepo(user.name,(repo)=>{
//         getcommits(repo,(commits)=>{
//             console.log(commits)
//         })
//     })
// })

// function getUser(id,callback){
//     setTimeout(()=>{
//       console.log('readinf a user from db..');
//       callback({id:id,name:'vikash'})
//     },2000)
// }
// function getrepo(name,callback){
//     setTimeout(()=>{
//       console.log('read repos of name');
//       callback(['repo1','repo2'])
//     },2000)
// }
// function getcommits(name,callback){
//     setTimeout(()=>{
//       console.log('read commits of name');
//       callback(['commiits','repo1','repo2'])
//     },2000)
// }

// callback hell se chhutkara

// getUser(1,getRepo);

// function getRepo(user){
//     getrepo(user,getCommits)
// }

// function getCommits(repo){
//  getcommits(repo,displayCommits)
// }

// function displayCommits(commits){
//    console.log(commits)
// }



// --------------------------------

// promise


function getUser(id){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('readinf a user from db..');
            callback({id:id,name:'vikash'})
          },2000)

    })
}


function getrepo(name){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('read repos of name');
            callback(['repo1','repo2'])
          },2000)
    })

   
}
function getcommits(name){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('read commits of name');
            callback(['commiits','repo1','repo2'])
          },2000)
    })
    
}

// consume promises

getUser(1).then((user)=>getrepo(user.name))
.then((repo)=>getcommits(repo))
.then((commits)=>console.log('read commits'))
.catch((err)=>console.log('err',err))