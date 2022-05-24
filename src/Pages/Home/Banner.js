import React from "react";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import bgBanner from "../../assets/images/banner-bg.jpg";

const Banner = () => {
    return (
        <div
            className="carousel w-full"
            style={{
                background: `url(${bgBanner})`,
            }}
        >
            <div id="slide1" className="carousel-item relative w-full">
                <div className="flex justify-evenly items-center w-full py-10">
                    <div>
                        <h1 className="text-6xl font-bold pb-9">
                            Aftermarket <br />
                            Turbocharger <br />
                            Specialist
                        </h1>
                        <button className="btn btn-base">Discover more</button>
                    </div>
                    <img src={banner1} alt="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="flex justify-evenly items-center w-full py-10">
                    <div>
                        <h1 className="text-6xl font-bold pb-9">
                            Aftermarket <br />
                            Turbocharger <br />
                            Specialist
                        </h1>
                        <button className="btn btn-secondary">
                            Discover more
                        </button>
                    </div>
                    <img src={banner2} alt="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="flex justify-evenly items-center w-full">
                    <div>
                        <h1 className="text-6xl font-bold pb-9">
                            Aftermarket <br />
                            Turbocharger <br />
                            Specialist
                        </h1>
                        <button className="btn btn-secondary">
                            Discover more
                        </button>
                    </div>
                    <img src={banner3} alt="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
