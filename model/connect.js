const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', (err)=>{
    if (!err){
        console.log('data base connected');
    }
    else{
        console.log('database not connected');
    }
})

let connect = require('./todo_no_sql')