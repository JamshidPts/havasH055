import React from 'react';

function Header() {
  return (
    <div 
      className="
        mt-[1vh] min-h-[89.3vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8
        bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600
        relative overflow-hidden
      "
    >
      {/* Лёгкий декоративный оверлей / шум для премиум вида */}
      <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-extrabold leading-tight tracking-tight
          text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]
        ">
          ASSALOMU ALEYKUM
        </h1>

        <p className="
          text-xl sm:text-2xl md:text-3xl lg:text-4xl 
          font-semibold text-white/95 leading-relaxed
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
        ">
          Chilonzor chorbog'da joylashgan<br className="sm:hidden" />
          <span className="text-yellow-200 font-bold"> HAVAS</span> do'konining<br />
          rasmiy sahifasiga xush kelibsiz!
        </p>

        {/* Опционально: небольшая кнопка или подзаголовок */}
        <div className="pt-4">
          <a
            href="#products" // или куда нужно
            className="
              inline-block px-8 py-4 
              bg-white text-yellow-700 font-bold text-lg sm:text-xl
              rounded-full shadow-lg
              hover:bg-yellow-50 hover:text-yellow-800
              transition-all duration-300 transform hover:scale-105
            "
          >
            Do'konni ko'rish →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;