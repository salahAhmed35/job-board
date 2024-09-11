import React from "react";
import { jobs } from './jobs'
import { FaCode } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";

// title: "Graphic Designer",
// description: "Create visually appealing graphics for marketing materials and websites.",
// jobType: "Part Time",
// jobCategory: "Design",
// company: "Creative Studios",
// location: "New York, NY",
// salary: 75000,
// postedBy: "AnotherObjectIdHere",
// datePosted: new Date("2024-09-10"),
const BrowseJobs = () => {
    return (
        <div>
            <div className="browse-jobs">
                <div className="page-header bg-section py-8 h-80">
                    <div className="container flex items-center h-full">
                        <h1 className="text-5xl font-bold text-darkBlue">Browse Jobs</h1>
                    </div>
                </div>
                <div className="jobs-section my-10">
                    <div className="container mx-auto">
                        <div className="job-list flex flex-col gap-4">
                            {jobs.map((job) => (
                                <div className="job-card flex items-center p-3 bg-blue-100 rounded">
                                    <div className="job-icon bg-gray-200 p-5 ">
                                         <FaCode className="text-3xl text-orange-600"/>
                                    </div>
                                    <div className="job-details ml-4 grow">
                                        <h3 className="job-title text-2xl mb-3 font-semibold text-darkBlue">{job.title}</h3>
                                        <div className="flex ">
                                            <div className="job-location flex items-center mr-4">
                                                <FaLocationDot className="mr-1"/>
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="job-salary flex items-center mx-4">
                                                <FaMoneyBillAlt className="mr-1"/>
                                                <span>{job.salary}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="apply">
                                            <a href="#">Apply Now</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseJobs;