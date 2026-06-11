import "./App.css";
import  Header from "./Components/Header";
import Hero from "./Components/Hero";
import Sidebar from "./Components/sidebar";
import ProductSection from "./Components/productsection";
import Footer from "./Components/Footer";
function App(){
  return(
  <div>
    <Header/>
    <Hero/>
    <div className="main-content">
      <Sidebar/>
      <ProductSection/>
    </div>
    <Footer/>
  </div>);
}
export default App;