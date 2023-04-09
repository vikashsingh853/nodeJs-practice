var url ='kjwfnje'


console.log(__filename);
console.log(__dirname);

function logger(url){
    console.log(url);
}

// module.exports.log = logger    // object type export
// module.exports.endPont = url

//  when multiple func and varible export then use object type else use direct export



module.exports=logger;