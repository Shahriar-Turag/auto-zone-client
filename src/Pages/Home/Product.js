import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, children }) => {
    const { img, category, name, description, minOrder, availableQty, price } =
        product;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h4>{category}</h4>
                    <h2 className="card-title">{name.slice(0, 18)}...</h2>
                    <p>{description.slice(0, 90)}...</p>
                    <h6>Minimum Order: {minOrder}</h6>
                    <h6>Available Quantity: {availableQty}</h6>
                    <h6>Price: ${price}</h6>
                    <div className="card-actions">
                        <Link to={`/product/${product._id}`}>
                            <button className="btn btn-primary">
                                Purchase
                            </button>
                        </Link>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Product;
