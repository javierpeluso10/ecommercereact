import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Oval } from  'react-loader-spinner'
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../services/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({setCart}) =>{

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(()=>{

        const docRef = doc(db, 'products', productId )
        getDoc(docRef).then(doc => {
            const data = doc.data()
            const productAdapted = {id: doc.id, ...data}
            
            setProduct(productAdapted)
        }).catch(error =>{
            console.log('error')
        }).finally(()=>{
            setLoading(false)})
    },[productId])

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