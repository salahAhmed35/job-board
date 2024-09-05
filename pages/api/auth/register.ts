import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/mongo";
import User from "../../../models/User";
import bcrypt from 'bcrypt';
export default async function register(req: NextApiRequest, res: NextApiResponse){
    await dbConnect();
    if(req.method !== 'POST'){
        return res.status(405).json({message: 'Method Not Allowed'});
    }
    const {userName, email, password } = req.body;
    if(!userName || !email || !password){
        return res.status(400).json({message : 'Please provide all required fields'});
    }
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({userName, email, password:hashedPassword});
        await newUser.save()
        res.status(201).json({message: "Registration successful! Redirecting you to the login page..."})
    }catch(error){
        console.error('Error occurred:', error)
        res.status(500).json({message: "Internal Server Error"})
    }
}