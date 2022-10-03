import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import Counter from "../Counter/Counter"

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(()=>{
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(()=>{
            setLoading(false)
        })
    },[])

    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return(
        <div>
            <h1>Detalle de Producto</h1>
            <h1 className='tituloCard'>{product.name}</h1>
                <img src={product.img} alt="product.name" className='imgProducto'/>
                <p className='datosCard'>{product.description}</p>
                <p className='datosCard'>Precio: {product.price}</p>
                <p className='datosCard'>Stock: {product.stock}</p>
                <Counter stock={product.stock}/>
                <button className='buttonDetail'>Comprar</button>
        </div>
    )
}

export default ItemDetailContainer