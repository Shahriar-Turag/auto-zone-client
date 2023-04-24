import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className=" my-10">
            <h1 className="font-bold text-3xl ml-20 my-5">
                Our customers reviews
            </h1>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-3 ">
                    {reviews.length > 3
                        ? reviews
                            .slice(reviews.length - 3, reviews.length)
                            .map((review) => (
                                <Review
                                    key={review._id}
                                    review={review}
                                    className="flex justify-center items-center"
                                >
                                    {[...Array(parseInt(review.rating))].map(
                                        (x, index) => (
                                            <i
                                                key={index}
                                                className="fas fa-star"
                                            ></i>
                                        )
                                    )}
                                </Review>
                            ))
                        : reviews.map((review) => (
                            <Review key={review._id} review={review}>
                                {[...Array(parseInt(review.rating))].map(
                                    (x, index) => (
                                        <i
                                            key={index}
                                            className="fas fa-star"
                                        ></i>
                                    )
                                )}
                            </Review>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
