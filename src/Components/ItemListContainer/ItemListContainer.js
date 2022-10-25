import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Oval } from  'react-loader-spinner'
import { getProducts } from '../../services/firebase/firestore'
import './ItemListContainer.css'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = () =>{
    const {categoryId} = useParams()
    const {data: products, error, loading} = useAsync(() => getProducts(categoryId), [categoryId])

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