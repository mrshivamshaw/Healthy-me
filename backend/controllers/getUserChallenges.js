import user from "../models/user.js";
import mongoose from "mongoose";

const fetchUserChallenges = async(req,res) => {
    try {
        const userId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            console.log('Invalid userId format');
            return res.status(400).json({
              message: 'Invalid userId format',
              success: false,
            });
          }

        const challenges = await user.findById(userId).populate("challenges");
        const allChallenges = challenges.challenges
        let total = 0;
        for (let i = 0; i < allChallenges.length; i++) {
            if(allChallenges[i].completed)
            total += allChallenges[i].point;
            
        }
        const userData = await user.findByIdAndUpdate(userId,{totalPoint:total},{new:true})
        return res.status(200).json({
            challengesData : challenges,
            success : true,
            totalPoint : userData.totalPoint
        })
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            message : "User cannot be found",
            success : false
        })
    }
}

export default fetchUserChallenges