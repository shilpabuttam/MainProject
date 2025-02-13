import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String 
    },
    contactEmail: { 
        type: String 
    },
    thirdPartyUserId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users" 
    }, // Third-Party Admin user
    status: { 
        type: Boolean, 
        default: true
    },
    createdAt: { type: Date, 
        default: Date.now 
    }
  });
  
  const Company = mongoose.model("Company", companySchema);
  export default Company;


  //After logiging the Third Party we should display the a simple form to complete the process 

  // afte login he fill the company details
