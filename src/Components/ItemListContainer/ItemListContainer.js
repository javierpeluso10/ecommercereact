import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Oval } from  'react-loader-spinner'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'
import './ItemListContainer.css'


const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const collectionRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId) ) : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id : doc.id, ...data}
            })

            setProducts(productsAdapted)

        })
        .catch(error => {
            console.log('No se puede obtener los productos')
        })
        .finally(()=>{
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