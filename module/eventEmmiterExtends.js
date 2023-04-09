const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message){
        console.log({message});

        this.emit('logMessage', {id:1,name:'vikash'})
    }
}

module.exports = Logger