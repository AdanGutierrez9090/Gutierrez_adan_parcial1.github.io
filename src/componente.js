import { useNavigate } from "react-router-dom";

function Parcial() {
  const navigate = useNavigate();
  // Estilos rápidos en línea para visualización
  const estilos = {
    contenedor: { width: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', textAlign: 'center', fontFamily: 'Arial' },
    pantalla: { width: '100%', height: '50px', backgroundColor: '#f4f4f4', marginBottom: '10px', textAlign: 'right', padding: '10px', boxSizing: 'border-box', fontSize: '1.2rem' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' },
    boton: {width:'95%',margin:'8px', padding: '15px', fontSize: '20px', cursor: 'pointer', border: 'none', borderRadius: '5px' },
    botonAzul: {backgroundColor: '#0d6efd', color: 'white' },
    botonVerde: {backgroundColor: '#198754', color: 'white' },
    botonNegro: {backgroundColor: '#212529', color: 'white' }
  };
  return (
    <div style={estilos.contenedor}>
      <h1 style={{color:"#0d6efd"}}>Centro de Descarga</h1>
      <p>Haz clic en los botones para obtener tus archivos PDF.</p>
        {/* Fila 1 */}
        <a href={`${process.env.PUBLIC_URL}/pdf/comandos.pdf`} download style={{ color: "white", textDecoration: "none" }}>
        <button style={{...estilos.boton, ...estilos.botonAzul}}>
          COMANDOS BÁSICOS DE REACT
        </button>
        </a>

        <a href={`${process.env.PUBLIC_URL}/pdf/ieee.pdf`} download style={{ color: "white", textDecoration: "none" }}>
        <button style={{...estilos.boton, ...estilos.botonVerde}} >
          ISO / ESTANDAR IEEE
        </button>
        </a>

        <a href={`${process.env.PUBLIC_URL}/pdf/requerimientos.pdf`} download style={{ color: "white", textDecoration: "none" }}>
        <button style={{...estilos.boton, ...estilos.botonNegro}} >
          REQUERIMIENTOS FUNCINALES Y NO FUNCIONALES
        </button>
        </a>

        <a href={`${process.env.PUBLIC_URL}/pdf/sha_256.pdf`} download style={{ color: "white", textDecoration: "none" }}>
        <button style={{...estilos.boton, ...estilos.botonNegro}} >
          CÓDIGO PYTHON ALGORITMO SHA-256
        </button>
        </a>
        <button style={{...estilos.boton, ...estilos.botonNegro}} onClick={()=>navigate("/")}>REGRESAR AL PROYECTO PRINCIPAL</button>
    </div>
  );
};

export default Parcial;