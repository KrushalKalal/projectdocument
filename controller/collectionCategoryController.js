const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const CollectionCategory = require('../model/colllectionCategoryModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/collectionCategories',(req,res) => {
    
    CollectionCategory.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;
