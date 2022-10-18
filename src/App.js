import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext'
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart/' element={<Cart/>}/>
        <Route path='/checkout/' element={<Checkout/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/> 
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
