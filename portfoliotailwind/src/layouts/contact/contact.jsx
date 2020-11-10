import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto w-11/12 mt-10 bg-gray-100 rounded mb-8">
      <div className="xl:flex lg:flex sm:flex md:flex sm:flex-col md:flex-col sm:mt-10">
        <div className="bg-secondary-100 py-12  px-24 mr-24 rounded">
          <h2 className="text-gray-800 text-xl font-semibold">Contact info</h2>
          <div className="pt-4">
            <h3 className="text-lg text-gray-700">Address</h3>
            <div className="pt-2">
              <h4 className="text-gray-600">Chennai, India</h4>
              <h4 className="text-gray-600">Tamil Nadu</h4>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-lg text-gray-700">Mail</h3>
            <h4 className="text-gray-600">shiva1894300@gmail.com</h4>
          </div>
          <div className="pt-4">
            <h3 className="text-lg text-gray-700">Call</h3>
            <h3 className="text-gray-600">+91 7418940850</h3>
            <h3 className="text-gray-600">+91 8668166735</h3>
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            className="placeholder-gray-500 border px-4 py-2 mb-4 rounded "
            width="100px"
            placeholder="name"
          />
          <input
            type="text"
            className="placeholder-gray-500 border  px-4 py-2 mb-4 "
            placeholder="email"
          />
          <input
            type="text"
            className="placeholder-gray-500 border  px-4 py-2 mb-4 "
            placeholder="subject"
          />
          <input
            type="text"
            className="placeholder-gray-500 border  px-4 py-2 mb-4 "
            placeholder="message"
          />

          <button className="px-2 py-4 bg-gray-500 inline mt-10">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
