import React from "react";

import Banner from "./Banner";
import Categories from "./Categories";
import DoubleBanner from "./DoubleBanner";
import Info from "./Info";
import Products from "./Products";
import ThirdBanner from "./ThirdBanner";

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Products />
            <DoubleBanner />
            <ThirdBanner />
            <Categories />
        </div>
    );
};

export default Home;
