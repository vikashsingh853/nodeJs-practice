
const Logger=require('./eventEmmiterExtends');

const logger=new Logger()

logger.on('logMessage', function(args){
    console.log('listner called',args);
})

logger.log('hello dunia')