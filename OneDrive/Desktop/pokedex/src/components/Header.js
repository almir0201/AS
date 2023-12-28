import React from 'react';

export const Header = () => {
  return (
    <nav className="bg-third">
      <div>
        <div className="px-[157px] py-[15px] flex">
          <img src="/assets/pokemonLogo.png" alt="pokemonLogo" className="w-[157px] h-[63px]" />
          <div className="font-karla ml-auto text-[25px] font-normal leading-[25px] underline-offset-[15px]">
            <a href="/" className='hover:underline'>Home</a>
            <a href="/" className="hover:underline ml-[66px]">
              Pokédex
            </a>
            <a href="/" className="hover:underline ml-[66px]">
              Legendaries
            </a>
            <a href="/" className="hover:underline ml-[66px]">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
