import Logo from '../Logo/logo';
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import { collection, getDocs, query, orderBy} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { db } from '../../services/firebase'
import './Navbar.css';

const Navbar = () =>{

    const[categories, setCategories] = useState([])

    useEffect(()=>{
        const collectionRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(collectionRef).then(response => {
            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id : doc.id, ...data}
            })
            setCategories(categoriesAdapted)
        })
    },[])

    
    return(
    <header className="header">
        <div className='logoContainer'>
            <Logo/>
        </div>
            <nav className="nav">
                <div className='navMenu'>
                    {categories.map(cat => (
                        <Link key={cat.id} to={`/category/${cat.slug}`} className='buttonNavbar'>{cat.label}</Link>
                    ))}
                </div>
            </nav>
            <div className='cartWidget'>
                    <CartWidget/>
                </div>
    </header>
    )
}

export default Navbar