import { NextApiRequest, NextApiResponse } from "next";
import Job from "../../../models/Job";
import dbConnect from "../../../lib/mongo";


export default async function postJob(req: NextApiRequest, res:NextApiResponse){
    if(req.method !== 'POST'){
        res.status(405).json({message : "Methods Is Not Allowed"})
    }
    await dbConnect();
    const {title, company, location, jobType, jobCategory, description, salary, userId} = req.body;
    console.log(req.body);
    if(!title || !company || !location || !jobType || !jobCategory || !description || !userId){
        res.status(400).json({message: 'Please provide all required fields'});
    }else{
        try{
            const newjob = new Job({
                title,
                company,
                location,
                jobType,
                jobCategory,
                description,
                salary,
                postedBy: userId
            });
            await newjob.save() 
            res.status(201).json({message: "job saved"})
        }catch(error){
            res.status(500).json({message: 'enternal server error'})
        }
    }
}