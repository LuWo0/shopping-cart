import { Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Nav } from "./components/Nav";
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {

  return (
    <ShoppingCartProvider>
      <Nav />
      <Routes>
        <Route path="/" element= {<Home active= {true} />}/>
        <Route path="/about" element= {<About active = {true} />}/>
        <Route path="/store" element= {<Store active= {true} />}/>
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
