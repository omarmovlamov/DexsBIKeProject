import "../styles/banner.css";
import { AiFillStar } from "react-icons/ai";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
function BannerPage() {
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleInputClick = (e) => {
    e.stopPropagation();
  };
  const list = (anchor) => (
    <div
      className="box"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="sales-title" onClick={handleInputClick}>
        <h3>
          READY TO RIDE THE <span>FUTURE</span>?
        </h3>
        <p>Purchase your DexsBIKe today.</p>
      </div>
      <div className="sales-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            onClick={handleInputClick}
          />
        </div>

        <div className="form-group">
          <label htmlFor="creditCard">Credit Card</label>
          <input
            type="text"
            id="creditCard"
            className="form-control"
            onClick={handleInputClick}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            onClick={handleInputClick}
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            className="form-control"
            onClick={handleInputClick}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            className="form-control"
            onClick={handleInputClick}
          />
        </div>
        <button onClick={toggleDrawer(false)}>PAY $300</button>
      </div>
    </div>
  );

  return (
    <div className="bannerPage">
      <div className="title">
        <h1>
          Introducing <span>DexsBIKe</span>
        </h1>
        <h2>
          THE ELECTRIC BIKE OF THE <span>FUTURE</span>
        </h2>
      </div>
      <div className="banner-container">
        <div className="banner-left-side">
          <img
            src="https://lh3.googleusercontent.com/IZD8J2yIZFYv3T2q5npEE_6gxfHEZGKWp13Kewv3qkrw_5kRj-YxhE0nf4AvMRs8uon0aW2S3XkKGpyyW1x4R1Xe7kqtrog7"
            alt="Bike"
          />
        </div>
        <div className="banner-right-side">
          <div className="rightSide-content">
            <h4>
              DexsBIKe is the <span>Best Electric Bike</span> for Commuting and
              Recreation
            </h4>
          </div>
          <div className="banner-rating">
            <div>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <a href="#reviews">Read Reviews</a>
            </div>
            <p>
              The DexsBIKe is the perfect electric bike for commuting and
              recreation. It's lightweight and easy to ride, making it perfect
              for city streets and trails. With a long battery life, you can
              ride all day without having to worry about running out of power.
            </p>
          </div>
          <div className="buy-button">
            <div>
              {["bottom"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    BUY NOW $2360
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerPage;
