const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    itemName:{
        type:String,
        require: true
    },
    
})