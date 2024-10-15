import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { couleurPrincipale, police } = useContext(ThemeContext);

  return (
    <header>
      <h1 style={{ color: couleurPrincipale, fontFamily: police }}>
        Thème : {couleurPrincipale} - Police : {police}
      </h1>
    </header>
  );
};

export default Header;
