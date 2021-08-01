import BestBuy from "./components/BestBuy";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Categories/>
      <BestBuy/>
      {/* <TopBuy/> */}
      <Testimonials/>
      <Footer/>
    
    </div>
  );
}

export default App;
