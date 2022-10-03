import {useEffect, useState} from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

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
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return(
    <div>
        <h1>Todos Nuestros productos</h1>
        <ItemList products={products}/>
    </div>
)
}

export default ItemListContainer