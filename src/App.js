import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Home/Products";
import Login from "./Pages/Account/Login";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/Account/SignUp";
import RequireAuth from "./Pages/Account/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";

import AddReview from "./Pages/Dashboard/AddReview";
import OrderTable from "./Pages/Dashboard/OrderTable";
import MyOrders from "./Pages/Dashboard/MyOrders";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/product/:productId"
                    element={
                        <RequireAuth>
                            <ProductDetails />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<OrderTable />}></Route>
                    <Route path="review" element={<AddReview />}></Route>
                    <Route path="myOrders" element={<MyOrders />}></Route>
                </Route>
                <Route path="/shop" element={<Products />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
        </div>
    );
}

export default App;
