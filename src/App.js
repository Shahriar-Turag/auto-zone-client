import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Home/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Navbar from "./Pages/Shared/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/product/:productId"
                    element={<ProductDetails />}
                ></Route>
                <Route path="/shop" element={<Products />}></Route>
            </Routes>
        </div>
    );
}

export default App;
