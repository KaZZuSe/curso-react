import '../css/Boton.css'
function Boton ( { children, handleClick}) {

    return (
        /* coge como valor el children */
        <div className="boton" onClick={() => handleClick(children)}>
            {children}
        </div>
    )
}
export default Boton;