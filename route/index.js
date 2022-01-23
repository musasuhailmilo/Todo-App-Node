const express = require('express')
const route = express.Router()
const mongoose = require('mongoose').model('Todo')

route.get('/', async(req, res)=>{
    mongoose.find((err, docs)=>{
        if(!err){
        let arr = []
        docs.forEach(e=>{
            arr.push({id:e._id, task:e.task})
        })
        res.render('index', {todo: arr})
        }
        else{
            console.log(err);
        }
    })

})

route.get('/:_id', (req, res)=>{
    let {_id} =req.params
    mongoose.deleteOne({_id}).then(()=>{
        res.redirect('/')
    }).catch((err)=>{
        console.log(err, 'not delte');
        res.json(err)
    })
})




module.exports = route