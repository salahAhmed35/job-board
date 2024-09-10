import mongoose, {Schema, model} from "mongoose";


const JobSchema = new Schema({
    title: {type: String, require:true},
    description: { type: String, required: true },
    jobType: {type:String, required: true},
    jobCategory: {type: String, required:true},
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number },
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    datePosted:{type:Date, default: Date.now}  
})

const Job = mongoose.models.Job || model('Job', JobSchema);

export default Job