const os = require('os')

//current user
const user = os.userInfo()

//system uptime
const system = os.uptime()

// os
const currentOS = { 
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem (),
    freeMem: os.freemem(),
}

const path = require('path')

//content\subfolder\test.txt
const filePath = path.join('/content/', 'subfolder', 'test.txt') 

// get only file name
const base = path.basename(filePath);

// C:\Users\yigit\Desktop\projects\projects-node\content\subfolder\test.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

// read from file
const { readFileSync, writeFileSync, read } = require('fs')
const first = readFileSync ('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// write a file
writeFileSync('./content/third.txt', 
`Here is the result : \n ${first}, \n ${second}`)
const third = readFileSync('./content/third.txt')

// Async read, write
const { readFile, writeFile } = require('fs')

readFile('./content/firsst.txt', 'utf8', (err, result) => {
 if (err) {
   console. log(err)
   return
 }
 console.log(result)
})

