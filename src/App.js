import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import profile from './profile.jpeg';
import { HashRouter , Routes, Route, Link } from "react-router-dom";
import './App.css';
import Parcial from './componente';
import Parcial2 from './Parcial2'; // Importamos el nuevo archivo

// Este es el componente al que redirigiremos

const handleRedirect = () => {
  // Aquí podrías agregar lógica adicional
  window.open("https://merlipex9090.atlassian.net/jira/software/projects/SCRUM/boards/1", "_blank", "noopener,noreferrer");
};
const Dashboard = ({ user }) => (
  <div className="App-header">
    <img src={profile} width="15%" style={{ borderRadius: '50%' }} />
    <h1>Bienvenido(a), {user.name}</h1>
    <h2>EVALUACIÓN PARCIAL 3</h2>
    <div style={{ padding: '20px' }}>
    
      
      {/* Opción con etiqueta de anclaje simple */}
      <a 
        href={`${process.env.PUBLIC_URL}/pdf/ERS.pdf`} 
        download
      >
        <button>DESCARGAR DOCUMENTO ERS DEL PROYECTO</button>
      </a>
      
    </div>
    <button onClick={handleRedirect}>
    TABLERO JIRA PROYECTO Coricorn
    </button><br></br>
    <button onClick={() => window.location.reload()}>CERRRAR SESIÓN PARCIAL 3</button>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Sustituye con tu Client ID real de Google Cloud Console
  const clientId = "458096555010-9hrotk8no64ksj857ffvf8p26vh0j9ep.apps.googleusercontent.com";

  const onSuccess = (response) => {
    console.log("Login Success:", response);
    // Aquí normalmente decodificarías el JWT (token) para obtener los datos del usuario
  
    const token = response.credential; // depende del provider
    const decoded = jwtDecode(token);
    console.log("Usuario decodificado:", decoded);

    setUserData({
      name: decoded.name || decoded.given_name,
      email: decoded.email,
      picture: decoded.picture,
    });
    setIsLoggedIn(true);
  };

  const onError = () => {
    console.log("Login Failed");
  };
  return (
    <GoogleOAuthProvider clientId={clientId}>
      {isLoggedIn ? (
          <Dashboard user={userData} />
        ) : (
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
                  <div style={{ margin: '20px' }}>
              <GoogleLogin 
                onSuccess={onSuccess} 
                onError={onError}
                useOneTap
              />
            </div>
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
            )}
    </GoogleOAuthProvider>
  );
}

export default App;