import Cart from './assets/371979.svg'
const CartWidget = () =>{
    return(
        <div>
            <img src={Cart} alt='cart' className='shopCart'/>
            <span className='counter'>0</span>
        </div>
    )
}

export default CartWidget