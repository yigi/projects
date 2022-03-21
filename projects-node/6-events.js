const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//param name of the event 
customEmitter.on('response',() => {
    console.log(`data received`)
})

customEmitter.emit('response')

customEmitter.on('response',() => {
    console.log(`data received 2`)
})

