const express = require('express')
const mangoose = require('mongoose')
const routes = express.Router()

const User = require('../../model/user')

routes.get('/:objectId', (req,res)=>{
    console.log(req)
    console.log("DB Data started")
    const id = req.params.objectId;
    console.log(id)
    User.findById(id, () =>{}).clone().then((doc)=>{
        res.status(200).json(doc)
        
        console.log("Success")
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = routes