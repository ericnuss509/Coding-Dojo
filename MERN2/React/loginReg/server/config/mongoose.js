const mongoose = require('mongoose');
const db_name = "LogReg"

mongoose.connect(`mongodb://localhost/${db_name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('db connection established'))
    .catch(err => console.log('something went wrong', err))