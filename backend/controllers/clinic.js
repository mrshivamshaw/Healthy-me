import multer from 'multer';
import clinic from "../models/clinic.js";
import user from '../models/user.js';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const clinicController = async (req, res) => {
    try {

        const { clinicName, address, contactNumber, email } = req.body;
        const id = req.params.id
        if (!clinicName || !address || !contactNumber || !email) {
            return res.status(403).json({
                success: false,
                message: "Please fill all the required fields"
            });
        }

        console.log(req.file);
        const data = await clinic.create({
            clinicName: clinicName,
            address: address,
            contactNumber: contactNumber,
            email: email,
            clinicData: req.file.path
        });

        const update = await user.findByIdAndUpdate(id,{
            clinic:data.id
        },{new:true})

        return res.status(200).json({
            success: true,
            message: "Clinic created successfully",
            data: data,
            user: update
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error
        });
    }
};

export default clinicController;
