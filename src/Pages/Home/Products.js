import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            {location.pathname === "/" ? (
                <div className="flex justify-between py-20 flex-col lg:flex-row px-20">
                    <h2 className="text-4xl font-bold py-5 lg:py-0 ">
                        Top Hot Deals
                    </h2>
                    <Link to="/shop" className="link link-primary ">
                        SEE MORE
                    </Link>
                </div>
            ) : (
                <h2 className="text-3xl lg:text-4xl font-bold p-20 text-center lg:text-left">
                    All available Deals
                </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 lg:px-20 pb-20">
                {location.pathname === "/" || location.pathname === "/home "
                    ? products
                        .slice(0, 4)
                        .map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        ))
                    : location.pathname === "/shop"
                        ? products.map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        ))
                        : products.map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        ))}
            </div>
        </div>
    );
};

export default Products;
