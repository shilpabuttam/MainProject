import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users", 
    default: null 
  }, 

  message: { 
    type: String, 
    required: true 
  },

  type: { 
    type: String, 
    enum: ["task", "payment", "announcement"], 
    required: true 
  },

  taskId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "tasks", 
    default: null 
  }, 

  companyId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "companies", 
    default: null 
  }, 

  isRead: { 
    type: Boolean, 
    default: false 
  },

  global: { 
    type: Boolean, 
    default: false 
  },

  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
