import { useParams } from "react-router-dom"
import { Oval } from  'react-loader-spinner'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useAsync } from '../../hooks/useAsync'
import { getProductsById } from '../../services/firebase/firestore'


const ItemDetailContainer = ({setCart}) =>{
    const { productId } = useParams()

    const {data: product, error, loading} = useAsync(() => getProductsById(productId), [productId])

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
            <ItemDetail {...product} setCart={setCart}/>
        </div>
    )
}

export default ItemDetailContainer