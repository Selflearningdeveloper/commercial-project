import "./App.css";
import { BrowerRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Shop } from "./Pages/Shop/shop";
import { Cart } from "./pages/cart/cart";

function App() {
  return (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<cart/>}/> 
    </Routes>
    </Router>
   </div>
  );
}
export default App;
