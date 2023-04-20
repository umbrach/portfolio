import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-[#0a192f]"
    >
      <form
        method="POST"
        action="https://getform.io/f/a1f55bc4-8577-4b9b-af6d-0a7c5d01fff5"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-[#f152af]">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit form below or shoot me an email - umbrach415@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 placeholder:text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] placeholder:text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 placeholder:text-black"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#f152af] hover:border-[#f152af] duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
