const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]


const url =
  `mongodb+srv://fullstack:${password}@cluster0.v3fogtb.mongodb.net/habittracker?retryWrites=true&w=majority`

mongoose.connect(url)