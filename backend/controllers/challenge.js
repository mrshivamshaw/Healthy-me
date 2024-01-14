import user from "../models/user.js";
import challenge from "../models/challenge.js";

const handelChallenge = async (req, res) => {
  try {
    const { challengeName, point, id } = req.body;
    if (!challengeName || !point || !id) {
      return res.status(403).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    console.log('hello');
    const ChallengeData = await challenge.create({
        challengeName: challengeName,
        point: point,
      });
  
      const userId = id;
      const challengeId = ChallengeData._id;
  
      const updatedUser = await user.findByIdAndUpdate(
        userId,
        { $push: { challenges: challengeId } },
        { new: true }
      );
  
      return res.status(200).json({
        success: true,
        message: "Challenge created successfully",
        data: ChallengeData,
        updatedUser: updatedUser,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "Challenge not created, something went wrong",
        error: error,
      });
    }
  };
  
  export default handelChallenge;
  