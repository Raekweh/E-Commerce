const express = require('express');
const router = express.Router();

const Inventory = require('../../models/Inventory');

router.get('test', (req,res) => res.send('inventory route testing!'));


//Find all inventory
router.get('/', (req, res) => {
    Inventory.find()
      .then(inventory => res.json(inventory))
      .catch(err => res.status(404).json({ noinventoryfound: 'No Inventory found' }));
  });


//Find inventory by id
router.get('/:id', (req,res) => {
    Inventory.findById(req.params.id)
    .then(inventory => res.json(inventory))
    .catch(err => res.status(404).json({noinventoryfound: 'No Inventory found'}));
});

//Updating the inventory
router.put('/:id', (req,res) => {
    Inventory.findByIdAndUpdate(req.params.id,req.body)
    .then(inventory => res.json({msg: 'Updated successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to add this inventory'}));
});

router.delete('/:id', (req,res) => {
    Inventory.findByIdAndRemove(req.params.id, req.body)
    .then(inventory => res.json ({mgs: 'Inventory entry has been deleted successfully'}))
    .catch(err => res.status(404).json({error: 'No such Inventory exist'}));
});

module.exports = router;