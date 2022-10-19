import {useState} from 'react'
import './Form.css'

const Form = () =>{
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [dni, setDni] = useState('')
    const [email, setEmail] = useState('')

    return(
        <div>
            <form className='form'>
                <input
                name='nombre'
                className='formInput' 
                value={nombre} 
                placeholder='nombre' 
                onChange={(e) => setNombre(e.target.value)}/>
                <input 
                name='apellido'
                className='formInput' 
                value={apellido}  
                placeholder='apellido' 
                onChange={(e) => setApellido(e.target.value)}/>
                <input
                name='email' 
                className='formInput' 
                value={email} 
                placeholder='email' 
                type='email'
                onChange={(e) => setEmail(e.target.value)}/>
                <input
                name='dni'
                className='formInput' 
                min='7000000' 
                max='99999999' 
                value={dni} 
                placeholder='dni' 
                type='number'onChange={(e) => setDni(e.target.value)}/>
            </form>
        </div>
    )
}

export default Form