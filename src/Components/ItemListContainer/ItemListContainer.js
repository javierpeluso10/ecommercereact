import {useEffect, useState} from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { Oval } from  'react-loader-spinner'


const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        getProducts(categoryId).then(product =>{
            setProducts(product)
            }
        ).finally(()=>{
            setLoading(false)
        })
    },[categoryId])

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
    <div>
        <h1 className='tituloPresentacion'>Todos Nuestros productos</h1>
        <ItemList products={products}/>
    </div>
)
}

export default ItemListContainer