import '../styles/Testimonio.css'
function Testimonio(props) {
    return (

        <div className="App">
            <div className='card'>
                <div className='card-text'>
                    <p id='name'>{props.nombre} residente en {props.ciudad}</p>
                    <p>{props.cargo}</p>
                </div>
                <div className='card-img-container'>
                </div>
                <img src={props.foto} alt={`Foto de ${props.nombre}`} className='card-img' />
                <div className='card-bio'>
                    <p>{props.bio}</p>
                </div>
            </div>
        </div>
    )

}

export default Testimonio