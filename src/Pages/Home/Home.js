import React from "react";
import AddReview from "../Dashboard/AddReview";

import Banner from "./Banner";
import BusinessSum from "./BusinessSum";
import Categories from "./Categories";
import DoubleBanner from "./DoubleBanner";
import FourthBanner from "./FourthBanner";
import Info from "./Info";
import Products from "./Products";
import Reviews from "./Reviews";
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
            <FourthBanner />
            <Reviews />
            <BusinessSum />
        </div>
    );
};

export default Home;
