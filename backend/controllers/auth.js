import mongoose from "mongoose";
import user from "../models/user.js";
import bcrypt from 'bcrypt'

export const signin = async (req,res) =>{
    try {
        const {firstName,middleName,lastName,email,password,confirmPassword,contactNumber,age} = req.body;
        if(!firstName || !lastName || !email || !password || !confirmPassword || !contactNumber || !age){
            return res.status(401).json({
                sucess: false,
                message : "All fields are reqired",
            })
        }
        const checkUser = await user.findOne({ email: email });

        if(checkUser){
            return res.status(300).json({
                sucess: false,
                message : "User already resgistered",
            })
        }

        if(password !== confirmPassword){
            return res.status(401).json({
                sucess: false,
                message : "password not matched",
            })
        }

        let hashedPass 
        try {
            hashedPass = await bcrypt.hash(password,10)
            
        } catch (error) {
            return res.status(500).json({
                sucess: false,
                message : "password not hashed",
            })
        }
        const userData = await user.create(
            {
                firstName:firstName,
                middleName:middleName,
                lastName:lastName,
                email:email,
                password:hashedPass,
                contactNumber:contactNumber,
                age:age,

            }
        )

        return res.status(200).json({
            sucess: true,
            message : "User registered successfully",
            data:userData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess: false,
            message : "something went wrong while registering user",
        })
    }
}