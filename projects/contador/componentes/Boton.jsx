import '../css/boton.css'
function Boton ( { children, manejarClic}) {

    return (
        <button className="boton" onClick={manejarClic}>
            {children}
        </button>
    )
}

export default Boton