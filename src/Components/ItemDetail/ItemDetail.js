import Counter from "../Counter/Counter"
import { useState } from "react"
import { Link } from "react-router-dom"
import './ItemDetail.css'

const ItemDetail = ({product}) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    console.log(quantityToAdd)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantityToAdd(quantity)
    }

    return(
        <div>
            <h1 className='tituloCard'>{product.name}</h1>
            <img src={product.img} alt="product.name" className='imgProducto'/>
            <p className='datosCard'>{product.description}</p>
            <p className='datosCard'>Precio: $ {product.price}</p>
            <p className='datosCard'>Stock: {product.stock}</p>
            {quantityToAdd === 0 ? (<Counter onConfirm={handleOnAdd} stock={product.stock}/>) : (<Link to='/cart' className='buttonFinish'>Finalizar compra</Link>)}
        </div>
    )
}

export default ItemDetail