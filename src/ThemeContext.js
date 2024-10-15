import { createContext, useState } from "react";

// Crée le contexte avec des valeurs par défaut
export const ThemeContext = createContext ({
    couleurPrincipale: 'blue',
    police: 'Arial',
    setTheme: () => {}
});

// Composant fournisseur de thème
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        couleurPrincipale: 'blue',
        police: 'arial'
    });

    return (
        <ThemeContext.Provider value={{ ...theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};