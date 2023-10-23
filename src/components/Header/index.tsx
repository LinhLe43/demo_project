import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="Page-header">
      <div className="Page-header-bar">
        <div className="Page-header-bar-logo">
          <a href="/" aria-label="home page" data-cms-ai="0">
            <img
              src="https://resources.gonitro.com/42/b5/7da352184238bf1ee7ecd71829bb/nitro-logo.svg"
              className="PageLogo-image"
              alt="nitro-logo.svg"
            />
          </a>
        </div>
        <div className="Page-header-navigation">
          <ul className="Navigation-items-right">
            <li>Product</li>
            <li>Industry</li>
            <li>Resources</li>
            <li>Plans & Pricing</li>
          </ul>
          <ul className="Navigation-items-left">
            <li style={{
                color: "#F54811",
                fontWeight: "bold",
                textAlign: "center"
            }}>Try for free</li>
            <li style={{
                color: "white",
                backgroundColor: "#D93706",
                borderRadius: '5px',
                fontWeight: "bold",
                textAlign: "center"
            }}>Buy now</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
