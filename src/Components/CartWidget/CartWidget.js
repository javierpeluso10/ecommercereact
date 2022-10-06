import Cart from './assets/371979.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const CartWidget = () =>{

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <img src={Cart} alt='cart' className='shopCart'/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget