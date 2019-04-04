const mongoose  = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName:{type : String , required:'This Field is manadatory.'},
    email:{type: String},
    mobile:{type: String},
    city:{type: String}
});

employeeSchema.path('email').validate((val)=>{
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
},'Invalid Email');

mongoose.model('Employee',employeeSchema);