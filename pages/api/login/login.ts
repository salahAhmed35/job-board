import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import dbConnect from "../../../lib/mongo";
import bcrypt from 'bcrypt';
export default async function login(req: NextApiRequest,res: NextApiResponse){
    if(req.method !== 'POST'){
        return res.status(405).json({message: 'Mothed Not Allowed'})
    }
    const {email, password} = req.body;
    await dbConnect()
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message : "User Not Found"})
        }
        const isMatched = await bcrypt.compare(password, user.password);
        if(!isMatched){
            return res.status(400).json({message : 'Password Is Incorrect'})
        }else{ 
            return res.status(201).json({message:"Successful login"})
        }
    }catch(error){
        return res.status(500).json({message: 'Inernal Server Error', error})
    }
}