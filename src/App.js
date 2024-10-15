import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Header from './Header';
import ThemeChanger from './ThemeChanger';

function App() {
  const { couleurPrincipale, police } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <p style={{ color: couleurPrincipale, fontFamily: police }}>
          Thème : {couleurPrincipale} - Police : {police}
        </p>
        <ThemeChanger />
      </div>
    </ThemeProvider>
  );
}

export default App;
