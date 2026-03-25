import React from "react";
import Subscribe from "../common/Subscribe";
import logo_footer from "../assets/logo-footer.png";


const Footer = () => {
  return (
    <div className="bg-gray-950 text-white py-20 relative mt-80">
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-10 -top-80 text-black z-10 w-300 hidden md:block"
       >
         <Subscribe
        title="Subscribe to our Newsletter"
        subTitle="Get the latest updates and news right in your inbox"
        buttonText="Subscribe"
         className="container mx-auto border border-gray-50 flex justify-center items-center py-20 rounded-md mt-20 "
         
      />
      </div>
      <div className="container mx-auto ">
        <div className=" flex items-center justify-center mt-6">
          <img src={logo_footer} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 py-20 ">
          <div className="space-y-4 text-center md:text-start">
            <h1 className="text-3xl">About us</h1>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.{" "}
            </p>
          </div>
          <div className="space-y-4 text-center md:text-start">
            <h1 className="text-3xl">Quick Links</h1>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <Subscribe
              title="Subscribe"
              subTitle="Subscribe to our newsletter for the latest updates."
              buttonText="Subscribe"
              className= ""
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 py-4">
        <p className="text-center">@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
