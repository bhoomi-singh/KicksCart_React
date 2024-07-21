import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar"; // Updated path
import { Shop } from "./pages/shop/shop"; // Updated path
import { Contact } from "./components/contact"; // Updated path
import { Cart } from "./pages/cart/cart"; // Updated path
import { ShopContextProvider } from "./context/shop-context.jsx";
import GoldMembership from './pages/GoldMembership'; // Updated path
import SilverMembership from "./pages/SilverMembership"; // Updated path
import PlatinumMembership from "./pages/PlatinumMembership"; // Updated path
import FashionBattle from "./pages/FashionBattles"; // Updated path

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/gold-membership" element={<GoldMembership />} />
            <Route path="/silver-membership" element={<SilverMembership />} />
            <Route path="/platinum-membership" element={<PlatinumMembership />} />
            <Route path="/fashion-battle" element={<FashionBattle />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
