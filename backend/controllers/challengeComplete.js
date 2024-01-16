import challenge from "../models/challenge.js";

export const updateChallenge = async(req,res) =>{
    try {
        const {id} = req.body;
        const data = await challenge.findByIdAndUpdate(id,{
            completed:true
        },{new:true})
        return res.status(200).json({
            sucsess : true,
            message : " Challenge completed",
            challengeData : data
        })
    } catch (error) {
        console.error(error);
    }
}