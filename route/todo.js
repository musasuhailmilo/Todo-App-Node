const express = require('express')
const route = express.Router()
let mongoose = require('mongoose').model('Todo')


route.post('/add', (req,res)=>{
    const {Todo} = req.body

    let con = new mongoose
    con.task = Todo
    con.save((err,docs)=>{
        if(!err){
            res.redirect('/')
        }
        else{
            console.log(err);
        }
    })
})




module.exports = route