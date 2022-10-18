import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


const Checkout = () =>{

    const {cart, total} = useContext(CartContext)

    const objOrder = {
        buyer: {
            name: 'Javier Peluso',
            phone: '123456789',
            email: 'javee@gmail.com'
        } ,
        items: cart,
        total
    }
    
    return(
        <h1>Titulo Checkout </h1>
    )
}

export default Checkout