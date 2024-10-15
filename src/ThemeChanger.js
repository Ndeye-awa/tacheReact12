import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeChanger = () => {
  const { setTheme } = useContext(ThemeContext);
  const [couleur, setCouleur] = useState("");
  const [police, setPolice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTheme({ couleurPrincipale: couleur, police: police });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <label>Couleur Principale: </label>
            <input
              className="ms-3"
              type="text"
              value={couleur}
              onChange={(e) => setCouleur(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label>Police: </label>
            <input
              className="ms-3"
              type="text"
              value={police}
              onChange={(e) => setPolice(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-info mt-4">
          Changer le thème
        </button>
      </form>
    </div>
  );
};

export default ThemeChanger;
