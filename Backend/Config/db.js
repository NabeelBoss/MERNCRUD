const mongoose = require("mongoose");

async function DbConnection(){
    const connection  = await mongoose.connect(process.env.dbcon);
    if(connection){
        console.log("Mongodb atlas is connected");
    }
}

module.exports = {DbConnection}