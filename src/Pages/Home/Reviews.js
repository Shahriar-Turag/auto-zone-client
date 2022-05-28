import React, { useEffect, useState } from "react";
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
        return (
            <div className="page text-center">
                <div
                    className="spinner-grow text-primary m-5 text-center"
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div class="grid grid-cols-4 gap-5 m-3 ">
            {reviews.length > 4
                ? reviews
                      .slice(reviews.length - 4, reviews.length)
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
                                  <i key={index} className="fas fa-star"></i>
                              )
                          )}
                      </Review>
                  ))}
        </div>
    );
};

export default Reviews;
