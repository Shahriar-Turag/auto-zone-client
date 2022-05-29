import React from "react";
import { Link } from "react-router-dom";
import ct1 from "../../assets/images/ct1.png";
import ct2 from "../../assets/images/ct2.png";
import ct3 from "../../assets/images/ct3.png";
import ct4 from "../../assets/images/ct4.png";
import ct5 from "../../assets/images/ct5.png";
import ct6 from "../../assets/images/ct6.png";

const Categories = () => {
    return (
        <div className="lg:m-20 m-10">
            <div className="flex justify-between pb-20 flex-col lg:flex-row">
                <h2 className="text-4xl font-bold py-5 lg:py-0">
                    Top Categories
                </h2>
                <Link to="/shop" className="link link-primary ">
                    SEE MORE
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div className="card lg:card-side bg-base-100 bg-accent">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white">
                            Tires
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-base">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12  w-[200px] transition ease-in-out duration-300"
                            src={ct1}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-base-100 bg-accent">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white">
                            Service Kits
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-base">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[150px] transition ease-in-out duration-300"
                            src={ct2}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-base-100 bg-accent">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white">
                            Steering Wheel
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-base">MORE</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[150px] transition ease-in-out duration-300"
                            src={ct3}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-base-100 bg-neutral">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-black">
                            Brake Parts
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-base-100 btn-accent">
                                MORE
                            </button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[200px] transition ease-in-out duration-300"
                            src={ct4}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-base-100 bg-neutral">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-black">
                            Batteries
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-base-100 btn-accent">
                                MORE
                            </button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[200px] transition ease-in-out duration-300"
                            src={ct5}
                            alt="Album"
                        />
                    </figure>
                </div>
                <div className="card lg:card-side bg-base-100 bg-neutral">
                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-black">
                            Oils and Fluids
                        </h2>

                        <div className="card-actions">
                            <button className="btn btn-base-100 btn-accent">
                                MORE
                            </button>
                        </div>
                    </div>
                    <figure>
                        <img
                            className="hover:-translate-x-12 w-[150px] transition ease-in-out duration-300"
                            src={ct6}
                            alt="Album"
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Categories;
