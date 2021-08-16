import {BrowserRouter, Route} from 'react-router-dom';

import Footer from "./components/footer/Footer";
import Home from './components/homePage/Home';
import Navbar from "./components/navbar/Navbar";
import Register from './components/register&login/Register';
import Login from './components/register&login/Login';
import Contact from './components/contact/Contact';
import Products from './components/products/Products';
import About from './components/about/About';
import ProductPage from './components/products/detailPage/ProductPage';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Cart from './components/shoppingCart/Cart';





function App() {

  return (
    <BrowserRouter>
    <div className="App">
     
      <Navbar />
      <Cart/>
      <Route exact path='/' render={(props)=><Home {...props}/>}/>
      <Route exact path="/register" render={(props)=><Register {...props}/>}/>
      <Route exact path="/login" render={(props)=><Login {...props}/>}/>
      <Route exact path="/contact" render={(props)=><Contact {...props}/>}/>
      <Route exact path="/shop" render={(props)=><Products {...props}/>}/>
      <Route exact path="/about-us" render={(props)=><About {...props}/>}/>
      {/* aici trebuie sa pui id-ul produsului */}
      <Route exact path="/product-detail/:id" render={(props)=><ProductPage {...props}/>}/>
      <Route exact path="/shopping-cart" render={(props)=><ShoppingCart{...props}/>}/>



      <Footer/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
