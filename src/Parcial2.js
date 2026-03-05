import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Parcial2() {
  // Estado para manejar qué imagen se muestra en el modal
  const [imagenVisible, setImagenVisible] = useState(null);

  // Estilos para los botones de colores (Metodologías)
  const btnMetodologia = (color) => ({
    backgroundColor: color,
    color: 'white',
    padding: '12px 25px',
    borderRadius: '8px',
    border: 'none',
    margin: '8px',
    fontSize: '16px',
    minWidth: '180px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  });

  // Estilo para los botones con borde azul (JIRA y Regresar)
  const btnBordeAzul = {
    display: 'inline-block',
    margin: '10px 0',
    padding: '10px 30px',
    border: '1px solid #4a90e2',
    borderRadius: '8px',
    color: '#4a90e2',
    textDecoration: 'none',
    fontSize: '1.1rem',
    backgroundColor: 'white',
    cursor: 'pointer'
  };

  // Función para cerrar la imagen
  const cerrarImagen = () => setImagenVisible(null);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '40px 20px', color: '#000' }}>
      
      {/* TÍTULOS Y DESCRIPCIÓN */}
      <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px' }}>METODOLOGÍAS DE DESARROLLO DE SW</h1>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '500', marginBottom: '20px' }}>¿Qué es una metodología de desarrollo de software?</h2>
      
      <p style={{ maxWidth: '1000px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: '1.4', color: '#333' }}>
        Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos que se aplican para diseñar soluciones de software informático. El objetivo de las distintas metodologías es el de intentar organizar los equipos de trabajo para que estos desarrollen las funciones de un programa de la mejor manera posible.
      </p>

      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '40px' }}>TIPOS DE METODOLOGÍAS</h2>
      
      <hr style={{ width: '95%', border: '0.5px solid #ccc', margin: '40px auto' }} />

      {/* BOTONES DE METODOLOGÍAS */}
      <div style={{ margin: '30px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <button onClick={() => setImagenVisible('cascada.png')} style={btnMetodologia('#007bff')}>CASCADA</button>
          <button onClick={() => setImagenVisible('modelo_v.png')} style={btnMetodologia('#6c757d')}>MODELO V</button>
          <button onClick={() => setImagenVisible('agiles.png')} style={btnMetodologia('#198754')}>ÁGILES</button>
          <button onClick={() => setImagenVisible('scrum.png')} style={btnMetodologia('#dc3545')}>SCRUM</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
          <button onClick={() => setImagenVisible('kanban.png')} style={btnMetodologia('#ffc107')}>KANBAN</button>
          <button onClick={() => setImagenVisible('xp.png')} style={btnMetodologia('#0dcaf0')}>XP</button>
          <button onClick={() => setImagenVisible('hibridas.png')} style={btnMetodologia('#212529')}>HÍBRIDAS</button>
        </div>
      </div>

      <hr style={{ width: '95%', border: '0.5px solid #ccc', margin: '40px auto' }} />

      {/* LINK JIRA Y BOTÓN REGRESAR */}
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>LINK A TABLERO DE TRABAJO</h2>
      {/* URL DE TU JIRA ACTUALIZADA */}
      <a 
        href="https://merlipex9090.atlassian.net/jira/software/projects/SCRUM/boards/1?jql=" 
        target="_blank" 
        rel="noreferrer" 
        style={btnBordeAzul}
      >
        ---- JIRA ----
      </a>

      <div style={{ marginTop: '30px' }}>
        <Link to="/" style={btnBordeAzul}>
          ---- REGRESAR MENÚ PRINCIPAL ----
        </Link>
      </div>

      {/* FRASE Y DATOS DEL ALUMNO */}
      <div style={{ marginTop: '60px' }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: '500' }}>
          Frase del tablero de metodología ágil:
        </h3>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '25px 0' }}>
          El Exito No Es Un Destino, Es Un Viaje
        </p>
        <p style={{ fontSize: '2rem', fontWeight: '500' }}>
          Alumno: Adan Ivan Gutierrez Rodriguez
        </p>
      </div>

      {/* VENTANA EMERGENTE (MODAL) */}
      {imagenVisible && (
        <div 
          onClick={cerrarImagen} 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center',
            alignItems: 'center', zIndex: 1000, cursor: 'pointer'
          }}
        >
          <div style={{ position: 'relative', backgroundColor: 'white', padding: '15px', borderRadius: '12px' }}>
            <button 
              onClick={cerrarImagen} 
              style={{
                position: 'absolute', top: '-15px', right: '-15px', borderRadius: '50%',
                width: '35px', height: '35px', border: 'none', backgroundColor: '#dc3545', 
                color: 'white', cursor: 'pointer', fontWeight: 'bold'
              }}
            >
              X
            </button>
            <img 
              src={`${process.env.PUBLIC_URL}/img/${imagenVisible}`} 
              alt="Metodología" 
              style={{ maxWidth: '85vw', maxHeight: '80vh', borderRadius: '4px' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Parcial2;