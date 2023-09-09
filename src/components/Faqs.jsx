import React from "react";
import "../styles/faqs.css";

function Faqs() {
  return (
    <div className="faqs">
      <h2>All the eBIKe A’s to your Q’s</h2>
      <div className="faqs-container">
        <div className="faqs-left">
          <div className="faqs-text">
            <div className="faqs-content">
              <h3>What is the range of the DexsBIKe electric bike?</h3>
              <p>
                The DexsBIKe has a range of up to 60 miles on a single charge.
              </p>
            </div>
            <div className="composite"></div>
            <div className="faqs-content">
              <h3>How fast does the DexsBIKe electric bike go?</h3>
              <p>The DexsBIKe can reach speeds of up to 20 mph.</p>
            </div>
            <div className="composite"></div>
            <div className="faqs-content">
              <h3>Is the DexsBIKe electric bike easy to ride?</h3>
              <p>
                Yes, the DexsBIKe is very easy to ride. It has a lightweight
                design and a comfortable seat
              </p>
            </div>
            <div className="composite"></div>
            <div className="faqs-content">
              <h3>Is the DexsBIKe electric bike safe?</h3>
              <p>
                Yes, the DexsBIKe is very safe. It has a number of safety
                features, including a headlight, taillight, and brakes.
              </p>
            </div>
          </div>
        </div>
        <div className="faqs-right">
          <div className="faqs-top">
            <img
              src="https://lh3.googleusercontent.com/BI4ZfpPX9B7BV4PkjORd4y1ZA9jCJZxzMgNxOBzAgzPucos8kHC8YxycH7_-GzUGlz75zjNCu9vKmOpGd5wwV53U4k-bR7tNrQ=w185"
              alt=""
            />
            <img
              src="https://lh3.googleusercontent.com/VIyVw2B9HLNRr7aNUJg1Esh8zzbe4NXtwjEtt_uPnZauPk65S0bDuy92xMZkqC9h5XmXys37ZE1OvHCxXDvD9cTGnkfXC4WWRh8=w185"
              alt=""
            />
          </div>
          <div className="faqs-bottom">
            <img
              src="https://lh3.googleusercontent.com/eMDZoVL5gqMThrGnYl4xnSG3TCKkn3y2B-TAHR5swIqf89ANbGqZx1GX4fKdWZUSAo-GFURXEsAR6HUbZtr6M6uPHchO429J21w=w387"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
