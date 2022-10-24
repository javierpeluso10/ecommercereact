import Counter from "../Counter/Counter"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../../Context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd ={
            id, name, price, quantity
        }
        addItem(productToAdd)
    }

    return(
        <div>
            <h1 className='tituloCard'>{name}</h1>
            <img src={img} alt="product.name" className='imgProducto'/>
            <p className='datosCard'>{description}</p>
            <p className='datosCard'>Precio: $ {price}</p>
            <p className='datosCard'>Stock: {stock}</p>
            {quantityToAdd === 0 ? (<Counter onConfirm={handleOnAdd} stock={stock}/>) : (<Link to='/cart' className='buttonFinish'>Continuar Compra</Link>)}
        </div>
    )
}

export default ItemDetail