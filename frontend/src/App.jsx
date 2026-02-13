// App.jsx
import { Routes, Route } from "react-router-dom"; // ✅ must be Routes, not Pages
import { Layout } from "./layout/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
