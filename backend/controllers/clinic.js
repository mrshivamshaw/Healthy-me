// import multer from 'multer';
// import clinic from "../models/clinic.js";

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const clinicController = async (req, res) => {
//     try {
//         console.log(req.body);
//         console.log(req.file);

//         const { clinicName, address, contactNumber, email } = req.body;

//         if (!clinicName || !address || !contactNumber || !email) {
//             return res.status(403).json({
//                 success: false,
//                 message: "Please fill all the required fields"
//             });
//         }

//         // Wrap the multer middleware in a promise to properly handle async operations
//         const uploadPromise = new Promise((resolve, reject) => {
//             upload.single('file')(req, res, function (err) {
//                 if (err instanceof multer.MulterError) {
//                     reject({
//                         success: false,
//                         message: "Error uploading file",
//                         error: err
//                     });
//                 } else if (err) {
//                     reject({
//                         success: false,
//                         message: "Unknown error uploading file",
//                         error: err
//                     });
//                 } else {
//                     resolve();
//                 }
//             });
//         });

//         await uploadPromise;

//         const data = await clinic.create({
//             clinicName: clinicName,
//             address: address,
//             contactNumber: contactNumber,
//             email: email,
//             clinicData: req.file ? req.file.buffer : Buffer.from([])  // Check if req.file exists
//         });

//         return res.status(200).json({
//             success: true,
//             message: "Clinic created successfully",
//             data: data
//         });

//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).json({
//             success: false,
//             message: "Internal Server Error",
//             error: error
//         });
//     }
// };

// export default clinicController;
