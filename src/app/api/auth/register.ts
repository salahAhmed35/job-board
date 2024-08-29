import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/mongo";
import User from "../../../../models/User";
async function reqister(req: NextApiRequest, res: NextApiResponse){
    await dbConnect();
    if(req.method !== 'POST'){
        return res.status(405).json({message: 'Method Not Allowed'});
    }
    const {name , email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message : 'Please provide all required fields'});
    }
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exist"})
        }
        const newUser = new User({name, email, password});
        await newUser.save()
        res.status(201).json({message: "User registered successfully"})
    }catch(error){
        res.status(500).json({message: "Internal Server Error"})
    }
}