import React from "react";
import "../styles/reviews.css";
import { AiFillStar } from "react-icons/ai";

function Reviews() {
  return (
    <div className="reviews" id="reviews">
      <h2>Riders love their DexsBIKe</h2>
      <div className="row">
        <div className="review-items col">
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>
            "I love my DexsBIKe! It's so easy to ride and it's great for getting
            around town."
          </p>
          <p>Jane Doe</p>
        </div>
        <div className="review-items col">
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>
            "The DexsBIKe is the best electric bike I've ever owned. It's fast,
            it's fun, and it's great for the environment."
          </p>
          <p>John Smith</p>
        </div>
        <div className="review-items col">
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>
            "I'm so glad I bought the DexsBIKe! It's the perfect way to get
            around town without having to worry about traffic or parking."
          </p>
          <p>Susan Jones</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
