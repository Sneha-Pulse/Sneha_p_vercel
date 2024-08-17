import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Contact(){
  return (
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
        <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Discuss a Project?🙃</div>
        <p className="text-gray-400 text-base">
          CONTACT ME👇🏽
        </p>
        {/* <a href="tel:+923349009827" className="text-gray-400 text-2xl hover:text-white">+92-3349009827</a> */}
        <a href="mailto:sneharaj5995@gmail.com" className="text-gray-400 text-2xl hover:text-white">sneharaj5995@gmail.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://github.com/Sneha-Pulse" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sneha-p-5995sspp/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaLinkedin />
          </a>
          {/* <a href="https://stackoverflow.com/users/23691689/talha-shah" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaKaggle />
          </a> */}
        </div>
      </div>
  )
}

export default Contact;