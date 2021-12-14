const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    itemName:{
        type:String,
        require: true
    },
    price:{
        type: Number,
        required:true
    },
    inventory_amount:{
        type: Number,
        required:true
    }
});

module.exports = Inventory = mongoose.model('inventory', InventorySchema);