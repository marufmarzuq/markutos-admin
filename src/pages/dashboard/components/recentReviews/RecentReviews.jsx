import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import assets from "../../../../assets";
import "./RecentReviews.css";

const RecentReviews = () => {
  const reviews = [
    {
      customer_name: "Jhon Doe",
      rating: 3,
      comment:
        "I love your products. It is very easy and fun to use this panel.",
    },
    {
      customer_name: "David Berks",
      rating: 4,
      comment:
        "I love your products. It is very easy and fun to use this panel.",
    },
    {
      customer_name: "Amara Keel",
      rating: 5,
      comment:
        "I love your products. It is very easy and fun to use this panel.",
    },
    {
      customer_name: "Johnath Siddeley",
      rating: 5,
      comment:
        "I love your products. It is very easy and fun to use this panel.",
    },
  ];
  return (
    <div className="single-widget">
      <div className="table-top-header">
        <div className="table-title">Recent reviews</div>
        <div className="table-filters">
          <Link to="products/reviews">View all</Link>
        </div>
      </div>
      <div className="recent-review-scrollable-container">
        {reviews.map((review) => (
          <div className="single-recent-review">
            <div className="srr-top">
              <img
                src={`https://ui-avatars.com/api/?background=random&color=fff&name=${review.customer_name}`}
                alt=""
              />
              <div className="srr-top-right">
                <div className="srr-customer-name">{review.customer_name}</div>
                <div className="srr-top-right-rating">
                  <Rating
                    initialRating={review.rating}
                    readonly
                    emptySymbol={
                      <img
                        src={assets.star_null}
                        className="rating-icon"
                        alt=""
                      />
                    }
                    fullSymbol={
                      <img
                        src={assets.star_fill}
                        className="rating-icon"
                        alt=""
                      />
                    }
                  />
                  <span>({review.rating})</span>
                </div>
              </div>
            </div>
            <div className="srr-desc">{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReviews;
