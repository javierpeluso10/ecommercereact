import Counter from "../Counter/Counter"

const ItemDetail = ({product}) =>{
    return(
        <div>
            <h1 className='tituloCard'>{product.name}</h1>
            <img src={product.img} alt="product.name" className='imgProducto'/>
            <p className='datosCard'>{product.description}</p>
            <p className='datosCard'>Precio: $ {product.price}</p>
            <p className='datosCard'>Stock: {product.stock}</p>
            <Counter stock={product.stock}/>
            <button className='buttonDetail'>Comprar</button>
        </div>
    )
}

export default ItemDetail