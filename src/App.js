import profile from './profile.jpeg';
import { HashRouter , Routes, Route, Link } from "react-router-dom";
import './App.css';
import Parcial from './componente';
import Parcial2 from './Parcial2'; // Importamos el nuevo archivo

function App() {
  return (
    <HashRouter >
      <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <div className="App">
                <header className="App-header">
                  <img src={profile} className="App-logo" alt="logo" />
                  <h1>
                    Evaluación parcial 1
                  </h1>
                  <h2>
                    Alumno: Adan Ivan Gutierrez Rodriguez
                  </h2>
                  <a
                    className="App-link"
                    href="https://www.linkedin.com/in/adan-gutierrez-35b29a300/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LINKED IN DE MI PROFILE
                  </a>
                  <br></br>
                  
                  {/* Link original */}
                  <Link className="App-link" to="/parcial">
                    DOCUMENTACION PARCIAL 1
                  </Link>

                  {/* NUEVO Link para Parcial 2 */}
                  <br></br>
                  <Link className="App-link" to="/parcial2">
                    DOCUMENTACION PARCIAL 2
                  </Link>
                </header>
              </div>
            }
          />

        {/* Ruta original */}
        <Route path="/parcial" element={<Parcial />} />
        
        {/* NUEVA Ruta para Parcial 2 */}
        <Route path="/parcial2" element={<Parcial2 />} />
      </Routes>
    </HashRouter >
  );
}

export default App;