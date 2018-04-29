var mongoose = require('mongoose');


//esquema do banco de dados Mongoose
var schema = mongoose.Schema({

    titulo:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    grupo:{
        type:Number,
        required:true
    }
});

mongoose.model('Foto' , schema);

