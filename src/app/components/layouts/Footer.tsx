import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8   w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#">Developers</a>
              </li>
              <li className="mb-2">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="text-white font-bold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center">
            &copy; 2023 Your Jobs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
