const express = require('express');
const router = express.Router();

//bring in our model 
const Item = require('../../models/Item');

//get all items from api/item using public access
router.get('/', (req, res) => {
    Item.find()
      .sort({date: -1})
     .then(items => {res.json(items)})
});

//post an item to api/item using public access
router.post('/', (req, res)=> {
    const newItem = new Item({
      name: req.body.name
    });

    newItem.save()
      .then(item => {res.json(item)})
});

//post an item to api/item using public access
router.delete('/:id', (req, res) => {
   Item.findById(req.params.id)
     .then(item => item.remove().then(() => {res.json({success: true})}))
     //id that doesnt exit
     .catch(err => {res.json({success:false}, err)});

});






module.exports = router;