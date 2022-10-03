import {useState} from 'react'


const Counter = ({stock}) =>{
    const [count, setCount] = useState (0)

    const aumentarCantidad = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const bajarCantidad = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    return(
        <div className='contenedorBotones'>
            <button onClick={bajarCantidad} className='buttonDetail2'>-</button>
            <p className='datosCard'>Seleccione Cantidad: {count}</p>
            <button onClick={aumentarCantidad} className='buttonDetail2'>+</button>
        </div>
    )
}

export default Counter 