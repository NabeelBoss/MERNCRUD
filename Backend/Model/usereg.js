const mongoose = require("mongoose");


const userreg_model = mongoose.Schema(

    {

        Name:{
            type:String,
            required:[true,"Name must be Enter"],
            
        },

        Email:{
            type:String,
            required:[true,"Email must be Enter"]
        },

        Pass:{
            type:String,
            required:[true,"Password must be Enter"]
        }
        
    }
)  
        

const registration =  mongoose.model("Userreg",userreg_model)
      
module.exports = {registration}