import React from "react";
import wheel2 from "../../assets/images/wheel2.png";

const FourthBanner = () => {
    return (
        <div>
            <div class="card lg:card-side  shadow-xl m-20 border py-5 bg-gray-50">
                <div class="card-body">
                    <h2 class="card-title text-4xl font-bold">
                        Likelife Audio & Secure Fit
                    </h2>
                    <p>Engineered for your best workout yet</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">SHOP NOW</button>
                    </div>
                </div>
                <figure>
                    <img
                        className="w-[700px] hover:-translate-x-20 transition ease-in-out duration-300"
                        src={wheel2}
                        alt="Album"
                    />
                </figure>
            </div>
        </div>
    );
};

export default FourthBanner;
