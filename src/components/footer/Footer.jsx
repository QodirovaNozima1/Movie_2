import React from 'react';
import "./Footer.css"
import foto1 from "../../assets/image 7.png"
import foto2 from "../../assets/image 8.png"
import logo from "../../assets/Logo (3).png"
import footer from "../../assets/footer1.png"
import footer2 from "../../assets/footer3.png"
import footer3 from "../../assets/footer4.png"
import footer4 from "../../assets/footer5.png"

const Footer = () => {
  return (
    <footer className="bg-inherit text-white footer">
      <div className="container footer__wrapper p-4 justify-between md: flex flex-col items-center md:flex-row items-start pl-9 bg-[#111111] rounded-lg">
        <div className="flex flex-col items-center justify-start md:items-start mb-4 md:mb-0 gap-3.5">
          <div>
          <img src={logo} alt="" />
          </div>
          <div className="flex gap-4 flex-col">
            <a href="#" className="text-xl text-gray-400 hover:text-white transition duration-300">
              <img src={foto1} alt="" />
            </a>
            <a href="#" className="text-xl text-gray-400 hover:text-white transition duration-300">
              <img src={foto2} alt="" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-col gap-6 mb-4 md:mb-0">
          <a href="/" className="text-xl text-gray-200 hover:text-white transition duration-300">About us</a>
          <div className="flex gap-2">
            <img src={footer2} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Публичная оферта</a>
          </div>
          <div className="flex gap-2">
            <img src={footer} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Home</a>
          </div>
          <div className="flex gap-2">
            <img src={footer3} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Кино</a>
          </div>
          <div className="flex gap-2">
            <img src={footer4} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Концерты</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-6 mb-4 md:mb-0">
          <a href="/" className="text-xl text-gray-200 hover:text-white transition duration-300">Contact</a>
          <div className="flex gap-2">
            <img src={footer2} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Публичная оферта</a>
          </div>
          <div className="flex gap-2">
            <img src={footer} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Home</a>
          </div>
          <div className="flex gap-2">
            <img src={footer3} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Кино</a>
          </div>
          <div className="flex gap-2">
            <img src={footer4} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Концерты</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-6 mb-4 md:mb-0">
          <a href="/" className="text-xl text-gray-200 hover:text-white transition duration-300">Blog</a>
          <div className="flex gap-2">
            <img src={footer2} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Публичная оферта</a>
          </div>
          <div className="flex gap-2">
            <img src={footer} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Home</a>
          </div>
          <div className="flex gap-2">
            <img src={footer3} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Кино</a>
          </div>
          <div className="flex gap-2">
            <img src={footer4} alt="" />
            <a href="/" className="text-sm text-gray-400 hover:text-white transition duration-300">Концерты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
