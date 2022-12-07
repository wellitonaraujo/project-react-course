import ListProduct from "../src/pages/ListProducts";
import Cart from "../src/pages/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
