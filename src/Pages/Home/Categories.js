import React from "react";
import { Link } from "react-router-dom";
import ct1 from "../../assets/images/ct1.png";

const Categories = () => {
    return (
        <div className="m-20">
            <div className="flex justify-between pb-20 flex-col lg:flex-row">
                <h2 className="text-4xl font-bold py-5 lg:py-0">
                    Top Categories
                </h2>
                <Link to="/shop" className="link link-primary ">
                    SEE MORE
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-category">
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <div class="card-body space-y-5">
                        <h2 class="card-title text-3xl">Tires</h2>

                        <div class="card-actions">
                            <button class="btn btn-primary">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 relative left-12"
                            src={ct1}
                            alt="Album"
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Categories;
