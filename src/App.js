import {BrowserRouter, Route} from 'react-router-dom';

import Footer from "./components/footer/Footer";
import Home from './components/homePage/Home';
import Navbar from "./components/navbar/Navbar";
import Register from './components/register&login/Register';
import Login from './components/register&login/Login';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Navbar />
      <Route exact path='/' render={(props)=><Home {...props}/>}/>
      <Route exact path="/register" render={(props)=><Register {...props}/>}/>
      <Route exact path="/login" render={(props)=><Login {...props}/>}/>

      <Footer/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
