const {createReadStream} = require('fs');

const stream = createReadStream('./content/third.txt')

stream.on('data', (result) => {
    console.log(result)
})