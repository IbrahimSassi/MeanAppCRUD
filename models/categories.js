var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({

    name: {
        type: String
        , index: true
        , required: true
    },
    description:{
        type: String

    }
    
    
});



var Category = module.exports = mongoose.model('Category',categorySchema);

//Get ALL Categories

module.exports.getCategories = function(callback){
    Category.find(callback);
}

//GetCategoryBy ID

module.exports.getCategoryById = function(id,callback){
    Category.findById(id,callback);
    
}

//Get Category articles

module.exports.createCategory = function(newCategory,callback){
newCategoryCategory.save(callback);
}






