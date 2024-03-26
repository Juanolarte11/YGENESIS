import Navbar from "./Components/Navbar"
import AcercaYo from "./Screens/AcercaYo";
import Artistas from "./Screens/Artistas";
import Conctact from "./Screens/Conctact";
import Footer from "./Screens/Footer";
import Home from "./Screens/Home";
import Testimonios from "./Screens/Testimonios";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AcercaYo/>
      <Artistas/>
      <Testimonios/>
      <Conctact/>
      <Footer/>
    </div>
  );
}

export default App;
