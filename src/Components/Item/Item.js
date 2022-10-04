import { Link } from "react-router-dom"

const Item = ({product}) =>{
    return(
        <div className='contenedorProducto'> 
            <h1 className='tituloCard'>{product.name}</h1>
            <img src={product.img} alt="product.name" className='imgProducto'/>
            <p className='datosCard'>{product.name}</p>
            <p className='datosCard'>Precio: $ {product.price}</p>
            <Link to={`/detail/${product.id}`} className='buttonDetail'>Ver Detalle</Link>
        </div>
    )
}

export default Item