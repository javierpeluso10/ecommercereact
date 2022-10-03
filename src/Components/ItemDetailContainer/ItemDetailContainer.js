import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import { Oval } from  'react-loader-spinner'
import ItemDetail from "../ItemDetail/ItemDetail"


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
            <div className='loading'>
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
        )
    }
    return(
        <div className="cardProducto">
            <h1 className="tituloPresentacion">Detalle de Producto</h1>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer