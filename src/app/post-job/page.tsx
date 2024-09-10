"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";
interface FormData {
    title: string;
    company: string;
    location: string;
    jobCategory: string;
    description: string;
    salary?: number | null | undefined;
}
export const jobCategorys = [
    'Software Engineer',
    'Web Developer',
    'Data Analyst',
    'Project Manager',
    'UI/UX Designer',
    'Product Manager',
    'DevOps Engineer',
    'Data Scientist',
    'Business Analyst',
    'Quality Assurance Engineer',
    'Technical Writer',
    'IT Support Specialist',
    'Database Administrator',
    'Network Administrator',
    'Cybersecurity Analyst',
    'Cloud Architect',
    'Mobile App Developer',
    'Game Developer',
    'Artificial Intelligence Engineer',
    'Machine Learning Engineer',
];
const jobTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Internship',
]
const PostJob = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        company: '',
        location: '',
        jobCategory: '',
        description: '',
        salary: null,
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e : FormEvent) =>{
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className="w-full bg-section mx-auto py-10 ">
            <form onSubmit={handleSubmit} className="max-w-[650px] my-3 mx-auto py-8 px-3 rounded bg-white shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Post a Job</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="title">
                        Job Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="company">
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="flex align items center gap-2">
                <div className="mb-4 w-1/2">
                    <label className="block text-sm font-medium mb-2" htmlFor="jobCategory">
                        Job Category
                    </label>
                    <select
                        name="jobCategory"
                        id="jobCategory"
                        value={formData.jobCategory}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        
                        {jobCategorys.map((title) => (
                            <option key={title} value={title}>
                                {title}
                            </option>
                        ))}
                    </select>
                </div>
                    <div className="mb-4 w-1/2">
                        <label className="block text-sm font-medium mb-2" htmlFor="jobType">
                            Job Type
                        </label>
                        <select
                            name="jobType"
                            id="jobType"
                            value={formData.jobCategory}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            {
                                jobTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="description">
                        Job Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="salary">
                        Salary (Optional)
                    </label>
                    <input
                        type="number"
                        name="salary"
                        id="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Post Job
                </button>
            </form>
        </div>
    )
}
export default PostJob