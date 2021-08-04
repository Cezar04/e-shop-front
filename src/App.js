import {BrowserRouter, Route} from 'react-router-dom';

import Footer from "./components/footer/Footer";
import Home from './components/homePage/Home';
import Navbar from "./components/navbar/Navbar";
import Register from './components/register&login/Register';
import Login from './components/register&login/Login';
import Contact from './components/contact/Contact';
import Products from './components/products/Products';
import About from './components/about/About';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Navbar />
      <Route exact path='/' render={(props)=><Home {...props}/>}/>
      <Route exact path="/register" render={(props)=><Register {...props}/>}/>
      <Route exact path="/login" render={(props)=><Login {...props}/>}/>
      <Route exact path="/contact" render={(props)=><Contact {...props}/>}/>
      <Route exact path="/products" render={(props)=><Products {...props}/>}/>
      <Route exact path="/about-us" render={(props)=><About {...props}/>}/>



      <Footer/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
