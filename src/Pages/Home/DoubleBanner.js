import React from "react";
import { Link } from "react-router-dom";
import brake from "../../assets/images/brake.png";
import wheel from "../../assets/images/wheel.png";

const DoubleBanner = () => {
    return (
        <div className="flex justify-evenly p-10 lg:p-20 gap-8 flex-col md:flex-row lg:flex-row ">
            <div className="card lg:card-side bg-base-100 shadow-xl bg-neutral">
                <div className="card-body">
                    <h2 className="card-title font-bold ">Engine Auto Part</h2>
                    <p>Engineered for your best workout yet</p>

                    <Link to="/shop">
                        <button className="btn btn-primary">SHOP NOW</button>
                    </Link>
                </div>
                <figure>
                    <img
                        className="hover:-translate-x-12 relative left-12 w-[250px] transition ease-in-out duration-300"
                        src={brake}
                        alt="Album"
                    />
                </figure>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-accent">
                <div className="card-body">
                    <h2 className="card-title font-bold ">
                        Likelife Audio & Secure Fit
                    </h2>
                    <p>Engineered for your best workout yet</p>
                    <Link to="/shop">
                        <button className="btn btn-base">SHOP NOW</button>
                    </Link>
                </div>
                <figure>
                    <img
                        className="hover:-translate-x-12 relative left-12 w-[250px] transition ease-in-out duration-300"
                        src={wheel}
                        alt="Album"
                    />
                </figure>
            </div>
        </div>
    );
};

export default DoubleBanner;
