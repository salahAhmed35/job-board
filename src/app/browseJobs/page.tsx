import React from "react";
import { jobs } from './jobs'
import { FaCode } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import SecondaryButton from "../components/ui/button/secondaryButton";
import Link from "next/link";
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
                                <div className="job-card flex items-center p-3 bg-blue-50 rounded border border-transparent hover:border-green-400 duration-300 cursor-pointer">
                                    <div className="job-icon bg-gray-200 p-5 ">
                                         <FaCode className="text-3xl text-orange-600"/>
                                    </div>
                                    <div className="job-details ml-4 grow">
                                        <h3 className="job-title text-2xl mb-3 font-semibold text-darkBlue">{job.title}</h3>
                                        <div className="flex w-8/12 justify-between">
                                            <div className="job-location flex items-center text-gray-500">
                                                <FaLocationDot className="mr-1"/>
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="job-location flex items-center text-gray-500">
                                                <FaRegClock className="mr-1"/>
                                                <span>{job.jobType}</span>
                                            </div>
                                            <div className="job-salary flex items-center font-semibold px-3 py-1 bg-green-500 rounded text-white">
                                                <FaMoneyBillAlt className="mr-1"/>
                                                <span>{job.salary} $</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="apply">
                                            <Link href = '/'>
                                                <SecondaryButton title="Apply Now" />
                                            </Link>
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