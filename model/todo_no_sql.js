let mongoose = require('mongoose')

let todo = mongoose.Schema(
  {  task:{
        type:String,
        required: 'required'    
    }
}
)

mongoose.model('Todo', todo)
console.log('Schema created');