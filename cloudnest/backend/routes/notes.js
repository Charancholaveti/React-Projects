const express = require('express');
//creating router for notes
const router =express.Router();

router.get('/',(req,res)=>{
    res.json([]);
})

module.exports=router;