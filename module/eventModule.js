//event is signal something happen in apps
const EventEmmiter=require('events') // eventemmiter is class

const emmiter=new EventEmmiter();

// register for listeners
emmiter.on('logMessage', function(){
    console.log('litner called');
}   )
emmiter.on('logMessageData', function(args){
    console.log('litner called',args);
}   )

// raise an event
emmiter.emit('logMessageData',{id:1,name:'vikash'});
emmiter.emit('logMessage');


