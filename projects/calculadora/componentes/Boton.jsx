import '../css/Boton.css'
function Boton ( { children, handleClick } ) {

    return (
        /* coge como valor el children */
        <div className="boton" onClick={() => handleClick(children)}>
            {children}
        </div>
    )
}
/* 
function Boton (props)  {
    return (
        <div className="boton" onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
} */
export default Boton;