const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employeeDB',{useNewUrlParser: true},(err)=>{
    if(!err){
        console.log('MongoDb connected successfully');
    }
    else{
        console.log('error in connection');
    }
});

require('./employee.model');