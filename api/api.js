'use strict'

const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/schema');
const router = express.Router();

const bodyParser = require('body-parser');
const { json } = require('body-parser');


///// POST USER TO DB ///////
router.post('/', (req, res, next) => {

    //creating a new product to model the Schema
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname
    });
    
    product.save()
    .then( result => {
        console.log(result);
        res.status(201).json({
            message: 'Your have succesfully posted user',
            createdProduct: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
   

})

///////// GET ALL INFORATION FRO DATABASE /////
router.get('/', (req, res,next) =>{

    Product.find()
    .exec()
    .then(docs =>{

        console.log(docs);
        res.status(200).json({message: `List of all members`,docs})
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    });

})


////Updating information using property name ////////
router.patch('/:personId', (req,res, next) =>{
    
    const id = req.params.personId;

    const keepUpdates = {};

    for(const infor of req.body){
        keepUpdates[infor.propName] = infor.value;
    }
    Product.update({_id: id}, {$set: keepUpdates})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({message:  `Member updated`, result})
    })
    .catch(err => {
        res.status(500).json({
            
            error: err
        })
    })
})





////////// Get user with id //////////////////
router.get('/:id', (req,res,next) =>{

    Product.find({ _id: req.params.id })
    .exec()
    .then(docs =>{
        console.log(docs)
        res.status(200).json(docs);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            message:'User with that ID was deleted',
            error: err
        })
    });
})

///////    DELETE FROM ATLAS DATABASE USING ID  ///////////

router.delete('/:id', (req,res,next) =>{

    Product.deleteOne({ _id: req.params.id })
    .exec()
    .then(result =>{

        res.status(200).json({message: `Member deleted`, result});
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
})

module.exports = router;




