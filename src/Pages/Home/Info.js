import React from "react";

const Info = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl my-10 grid mx-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
                <div className="flex  lg:flex-row  items-center justify-evenly ">
                    <figure>
                        <i class="fas fa-luggage-cart text-3xl text-primary"></i>
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Fast and free delivery</h2>
                        <p>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <figure>
                        <i class="fas fa-headphones-alt text-4xl text-primary"></i>
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">24/7 Customer Support</h2>
                        <p>Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <figure>
                        <i class="fas fa-luggage-cart text-4xl text-primary"></i>
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Money back guarantee</h2>
                        <p>We return money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
