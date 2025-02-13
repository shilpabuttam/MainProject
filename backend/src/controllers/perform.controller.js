import Performance from "../models/performance.model.js";

export const getPerformances=async(req,res)=>{
    try {
        const performance=await Performance.find();
        if(performance.length===0){
            return res.status(400).json({message:"No Performances found"});
        }
        res.status(200).json(performance);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export const postPerformances = async (req, res) => {
    try {
        const performance = new Performance(req.body);
        const result = await performance.save();
        res.status(201).json({ message: "Performance created successfully", performance: result });
    } catch (err) {
        console.error("Error here:", err);
        res.status(500).json({ error: "Failed to create performance", details: err.message });
    }
};
export const deletePerformances=async(req,res)=>{
    try {
        const performance=await Performance.findByIdAndDelete(req.params.id);
        if(!performance){
            return res.status(400).json({message:"Performance not found"});
        }
        res.send(performance);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};
export const getOnePerformance = async (req, res) => {
    try {
        const performance = await Performance.findById(req.params.id);

        if (!performance) {
            return res.status(404).json({ message: "Performance not found" }); 
        }

        res.status(200).json(performance); 
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

export const updatePerformance=async(req,res)=>{
    try{
        let performance=await Performance.updateOne({_id:req.params.id},{$set:req.body});
        if(!performance){
            return res.status(400).json({message:"Performance not found"});
            }
        res.send(performance);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}