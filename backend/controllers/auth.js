import user from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt  from "jsonwebtoken";
import {config as configDotenv } from "dotenv";
configDotenv()

export const signin = async (req,res) =>{
    try {
        const {firstName,lastName,email,password,confirmPassword,contactNumber,age} = req.body;
        if(!firstName || !lastName || !email || !password || !confirmPassword || !contactNumber || !age){
            return res.status(200).json({
                success: false,
                message : "All fields are reqired",
            })
        }
        const checkUser = await user.findOne({ email: email });

        if(checkUser){
            return res.status(200).json({
                success: false,
                message : "User already resgistered",
            })
        }

        if(password !== confirmPassword){
            return res.status(200).json({
                success: false,
                message : "password not matched",
            })
        }

        let hashedPass 
        try {
            hashedPass = await bcrypt.hash(password,10)
            
        } catch (error) {
            return res.status(200).json({
                success: false,
                message : "password not hashed",
            })
        }
        const userData = await user.create(
            {
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:hashedPass,
                contactNumber:contactNumber,
                age:age,

            }
        )

        return res.status(200).json({
            success: true,
            message : "User registered successfully",
            data:userData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message : "something went wrong while registering user",
        })
    }
}

export const login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(200).json({
                success : false,
                message : "All fields are required"
            })
        }
        var userData = await user.findOne({email:email})

        if(!userData){
            return res.status(200).json(
                {
                    success:false,
                    message : "User not found please singin"
                }
            )
        }
        const payload = {
            email:userData.email,
            id:userData._id
        }
        if(await bcrypt.compare(password,userData.password)){
            const token = jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1m"})
            userData = userData.toObject()
            userData.token = token
            userData.password = undefined

            const options = {
                httpOnly:true,
                expires: new Date(Date.now() + 30*24*60*60*1000)
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token:token,
                message:"user successfully logged in",
                userData
            })
        }

        else{
            return res.status(200).json(
                {
                    success:false,
                    message : "Incorrect password"
                }
            )
        }
    } catch (error) {
        console.log(error);
        return res.status(404).json(
            {
                success:false,
                message : "Error while logging user"
            }
        )

    }
}