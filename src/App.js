import {useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cartProvider';
function App() {
  const[cartIsShow,setCartShow] = useState(false);
  const showCartHandler = ()=>{
setCartShow(true);
  }
  const hideCartHandler = ()=>{
    setCartShow(false);
      }
  return (
   <CartProvider>
   { cartIsShow && <Cart onClose = {hideCartHandler}/>}
  <Header onShowCart = {showCartHandler}/>
  <main>
    <Meals/>
  </main>
  </CartProvider>
  );
}

export default App;
