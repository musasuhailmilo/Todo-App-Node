let express = require('express')
// let bodyp = require('body-parser')
let path = require('path')

let { create } = require('express-handlebars');


let nosql = require('./model/connect')

let app = express()


app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

let hbs = create({
  extname: 'hbs',
  defaultLayout: 'mainlayout',
  layoutsDir: __dirname + '/views/layout'
})

app.engine('hbs', hbs.engine)




app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/views/'))

app.use('/' ,require('./route/index'))
app.use('/' ,require('./route/todo'))



app.listen(3000,()=>{
  console.log('listening to server');
})

