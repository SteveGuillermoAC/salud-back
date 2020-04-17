const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/salud')

    .then(db=>{
        (console.log('connect to mongo'))
        .catch(err=>{
            (console.log('error al conectar'))
        });
    });

    module.exports = mongoose ;
