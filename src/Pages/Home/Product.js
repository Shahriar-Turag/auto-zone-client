import React from "react";

const Product = ({ product, children }) => {
    const { img, category, name, description, minOrder, availableQty, price } =
        product;
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl ">
                <figure class="px-10 pt-10">
                    <img src={img} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h4>{category.slice}</h4>
                    <h2 class="card-title">{name.slice(0, 18)}...</h2>
                    <p>{description.slice(0, 90)}...</p>
                    <h6>Minimum Order: {minOrder}</h6>
                    <h6>Available Quantity: {availableQty}</h6>
                    <h6>Price: ${price}</h6>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Product;
