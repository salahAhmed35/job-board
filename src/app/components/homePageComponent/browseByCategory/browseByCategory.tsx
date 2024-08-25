import React from "react";
import "./browseByCategory.css"
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaDatabase,
  FaNetworkWired,
  FaServer,
  FaSearch,
  FaBullhorn,
  FaUserShield,
  FaProjectDiagram,
} from "react-icons/fa";
const BrowseByCategory = () => {
    const categories = [
        {
          name: "Web Development",
          description: "Learn to build websites and web applications.",
          icon: <FaCode />,
          color: "#1E90FF", 
        },
        {
          name: "Graphic Design",
          description: "Create stunning visuals and graphics.",
          icon: <FaPaintBrush />,
          color: "#FF69B4", 
        },
        {
          name: "Mobile Development",
          description: "Develop mobile apps for Android and iOS.",
          icon: <FaMobileAlt />,
          color: "#32CD32", 
        },
        {
          name: "Database Management",
          description: "Manage and maintain databases efficiently.",
          icon: <FaDatabase />,
          color: "#FFD700", 
        },
        {
          name: "Network Engineering",
          description: "Design and manage computer networks.",
          icon: <FaNetworkWired />,
          color: "#8A2BE2", 
        },
        {
          name: "System Administration",
          description: "Ensure IT infrastructure runs smoothly.",
          icon: <FaServer />,
          color: "#FF4500",
        },
        {
          name: "SEO Specialist",
          description: "Optimize websites for search engines.",
          icon: <FaSearch />,
          color: "#FF8C00", 
        },
        {
          name: "Digital Marketing",
          description: "Promote products and services online.",
          icon: <FaBullhorn />,
          color: "#00CED1", 
        },
        {
          name: "Cybersecurity",
          description: "Protect systems and data from cyber threats.",
          icon: <FaUserShield />,
          color: "#DC143C", 
        },
        {
          name: "Project Management",
          description: "Plan and oversee projects to ensure they are completed on time and within budget.",
          icon: <FaProjectDiagram />,
          color: "#4682B4",
        },
      ];
      

  return (
    <div className="browse-by-category mt-8 bg-section py-10">
      <div className="container">
        <div className="section-text text-center my-3">
          <h2 className="text-4xl font-bold mb-4 ">Browse by category</h2>
          <p className="tracking-wide text-darkGray my-2">
            Find your dream job by searching its category which makes your job
            search process easier
          </p>
        </div>
        <div className="cards-container flex flex-wrap justify-between  gap-2 mt-10 mb-3">
            {categories.map((category, index) => (
              <div key={index} className="card lg:w-1/4 grow p-4 m-2  bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-white  card-icon text-5xl mt-2 mb-12" style={{color: category.color}}>{category.icon}</div>
                <h3 className="card-title text-2xl font-semibold mt-5 mb-3">{category.name}</h3>
                <p className="card-description text-gray-600 mb-5">{category.description}</p>
                <a href="#" className="card-link text-blue-500 mt-5 mb-2 hover:text-darkBlue hover:shadow hover:p-2 hover:bg-blue-100 duration-300">Browse Job</a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;