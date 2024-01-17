import Navbar from "./Components/Navbar"
import AcercaYo from "./Screens/AcercaYo";
import Artistas from "./Screens/Artistas";
import Conctact from "./Screens/Conctact";
import Home from "./Screens/Home";



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AcercaYo/>
      <Artistas/>
      <Conctact/>
    </div>
  );
}

export default App;
