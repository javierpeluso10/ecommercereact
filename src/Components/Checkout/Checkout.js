import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { Oval } from  'react-loader-spinner'
import { db } from '../../services/firebase'
import './Checkout.css'

const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const {cart, total, clearCart} = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [dni, setDni] = useState('')
    const [email, setEmail] = useState('')

    const crearOrden = async () =>{
        setLoading(true)
        try{

        const objOrder = {
            buyer: {
                nombre: `${nombre}`,
                apellido: `${apellido}`,
                email: `${email}`,
                dni: `${dni}`
            } ,
            items: cart,
            total
        }

        const ids = cart.map(prod => prod.id)
        const productsRef = collection(db, 'products')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in', ids)))
        const { docs } = productsAddedFromFirestore

        const batch = writeBatch(db)
        const outOfStock = []

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity 

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            }else{
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })

        if(outOfStock.length === 0){
            await batch.commit()

            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)

            console.log(`El id de ordern es: ${orderAdded.id}`)
            clearCart()
        } else {
            console.log('Hay productos fuera de stock')
        }
    } catch (error){
        console.log(error)
    } finally{
        setLoading(false)
    }
}
if(loading){
    return <div>
        <h1>Su orden se esta generando</h1>
        <div className='loading2'>
        <Oval 
            height={80}
            width={80}
            color="#000000"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="gray"
            strokeWidth={2}
            strokeWidthSecondary={2}/>
    </div>
    </div>
}

    return(
        <>
        <h1> Complete sus Datos </h1>
        <form className='form'>
                <input
                name='nombre'
                className='formInput' 
                value={nombre} 
                placeholder='Nombre' 
                onChange={(e) => setNombre(e.target.value)}/>
                <input 
                name='apellido'
                className='formInput' 
                value={apellido}  
                placeholder='Apellido' 
                onChange={(e) => setApellido(e.target.value)}/>
                <input
                name='email' 
                className='formInput' 
                value={email} 
                placeholder='Email' 
                type='email'
                onChange={(e) => setEmail(e.target.value)}/>
                <input
                name='dni'
                className='formInput' 
                min='7000000' 
                max='99999999' 
                value={dni} 
                placeholder='DNI' 
                type='number'onChange={(e) => setDni(e.target.value)}/>
            </form>
        <div className="buttonContainer">
            <button onClick={crearOrden} className='buttonOrder' >Generar Orden</button>
        </div>
        </>
    )
}

export default Checkout