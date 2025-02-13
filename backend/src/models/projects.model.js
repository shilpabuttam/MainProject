import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    title : {
        type : String,
        required :true
    },
    description: { 
        type: String,
    },
    deadline : {
        type : Date,
    },
    resources : {
        type : String,

    },

    companyId :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "companies",
    },
    budget :{
        type : Number,
        required : true

    },
    totalPaid : {
        type : Number,
        default : 0
    },

    paymenthistory : [
        {
            amount: { 
              type: Number, 
              required: true 
            },
            paymentDate: { 
              type: Date, 
              required: true, 
              default: Date.now 
            }
          }
    ]
})

