const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


router.post('/',async (req,res)=>{
    try{
      const data = req.body
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })
  
  router.get('/', async (res,req)=> {
  
    try{
      const data = await MenuItem.find();
      console.log('data fatched');
      res.status(200).json(response);
  
    } catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })

  module.exports = router;