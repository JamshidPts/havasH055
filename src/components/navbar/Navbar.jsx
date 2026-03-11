import React, { useState } from 'react';
import { LiaTelegram } from "react-icons/lia";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <nav className="flex items-center justify-between py-4 border-b border-[#FADF00]">
        {/* Логотип */}
        <div>
          <a href="#">
            <img className="h-15 w-auto" src={logo} alt="Havas" />
          </a>
        </div>

        {/* Поиск — только на десктопе (от md и выше) */}
        <div className="hidden md:block w-full max-w-md mx-6">
          <input
            type="text"
            placeholder="Поиск..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full px-4 py-2.5
              bg-white/10 backdrop-blur-sm
              border border-[#FADF00]/30 rounded-lg
              placeholder:text-gray-400
              focus:outline-none focus:border-[#FADF00] focus:ring-2 focus:ring-[#FADF00]/30
              transition-all duration-200
            "
          />
        </div>

        {/* Иконки + кнопка меню */}
        <div className="flex items-center gap-5 md:gap-6">
          {/* Иконки соцсетей — видны только на десктопе */}
          <div className="hidden md:flex items-center gap-6 text-3xl">
            <a className='text-[27px]' href="tel:+998938003404"><FaPhone /></a>
            <a href="#"><LiaTelegram /></a>
            <a href="#"><FaInstagram /></a>
          </div>

          {/* Кнопка гамбургер / крестик — только на мобильных */}
          <button
            className="md:hidden text-3xl focus:outline-none transition-transform duration-200 active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Мобильное меню с анимацией */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-out
          ${isOpen 
            ? "max-h-96 opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="mt-2 rounded-2xl bg-black/90 border border-[#FADF00]/30 py-6 px-5 space-y-6 shadow-xl">
          {/* Поиск */}
          <input
            type="text"
            placeholder="Поиск..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full px-4 py-3
              bg-white/10 border border-[#FADF00]/40 rounded-lg
              text-white placeholder:text-gray-400
              focus:outline-none focus:border-[#FADF00] focus:ring-1 focus:ring-[#FADF00]/40
              transition-all duration-200
            "
          />

          {/* Иконки соцсетей в мобильном меню */}
          <div className="flex justify-center gap-16 text-4xl text-white">
            <a href="tel:+998938003404" className="hover:text-[#FADF00] transition-colors">
              <FaPhone />
            </a>
            <a href="#" className="hover:text-[#FADF00] transition-colors">
              <LiaTelegram />
            </a>
            <a href="#" className="hover:text-[#FADF00] transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;