const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../models/Item');

// @route GET api/items
// @desc GET All Items
// @access Public

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
}); // Here From Item model you are trying to find something which in returns gives you a promise! Then you are getting items later you are giving response as json value!

// @route POST api/items
// @desc POST Create A Item
// @access Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc DELETE A Item
// @access Public

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})

module.exports = router;
