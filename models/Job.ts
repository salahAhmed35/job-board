import mongoose, {Schema, model} from "mongoose";


const JobSchema = new Schema({
    title: {type: String, require:true},
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    postedBy: {type: Schema.Types.ObjectId, ref: 'User', require:true},
    datePosted:{type:Date, default: Date.now}
    
})

const Job = model('Job', JobSchema);

export default Job