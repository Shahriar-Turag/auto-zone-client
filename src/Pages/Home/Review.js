import React from "react";

const Review = ({ review, children }) => {
    const { name, details } = review;
    return (
        <div className="card lg:w-96 w-full  bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <i className="far fa star"></i>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Review;
