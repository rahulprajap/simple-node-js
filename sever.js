const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT =  process.env.PORT ||9000
app.listen(PORT,function(){
    console.log(`App server is running on localhost: ${PORT}`);
});

