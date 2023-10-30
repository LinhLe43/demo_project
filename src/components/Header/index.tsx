import React from "react";
import "./style.css";
function Header() {
  return (
    <div className="Page-header">
      <div className="Page-header-bar">
        <div className="Page-header-bar-logo">
          <a aria-label="home page" href="/" data-cms-ai="0">
            <img
              className="PageLogo-image"
              src="https://resources.gonitro.com/42/b5/7da352184238bf1ee7ecd71829bb/nitro-logo.svg"
              alt="nitro-logo.svg"
            />
          </a>
        </div>
        <div className="Page-header-navigation">
          <div className="Navigation" data-allow-nav-overflow="false">
            <ul className="Navigation-items">
              <li className="Navigation-items-item">
                <div className="NavigationItem">
                  <div className="NavigationItem-text">
                    <div className="NavigationItem-text-link">
                      <span className="NavigationItem-text-link-label">
                        Products
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="Navigation-items-item">
                <div className="NavigationItem">
                  <div className="NavigationItem-text">
                    <div className="NavigationItem-text-link">
                      <span className="NavigationItem-text-link-label">
                        Industry
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="Navigation-items-item">
                <div className="NavigationItem">
                  <div className="NavigationItem-text">
                    <div className="NavigationItem-text-link">
                      <span className="NavigationItem-text-link-label">
                        Resources
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="Navigation-items-item">
                <div
                  className="NavigationItem"
                  data-button-style="secondary-dark"
                >
                  <div className="NavigationItem-text">
                    <a
                      className="NavigationItem-text-link"
                      href="https://www.gonitro.com/pricing"
                      data-cms-ai="0"
                    >
                      <span className="NavigationItem-text-link-label">
                        Plans &amp; Pricing
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li
                className="Navigation-items-item"
                data-has-button
                data-nav-buton="true"
              >
                <div
                  className="NavigationItem-m"
                  data-button="true"
                  data-button-style="orange-link"
                >
                  <div className="NavigationItem-text">
                    <a
                      className="NavigationItem-button orange-link"
                      href="https://www.gonitro.com/download"
                      data-cms-ai="0"
                      data-selected="true"
                      data-label-id="0"
                      data-metatip="true"
                    >
                      <span className="NavigationItem-button-label-try">
                        Try for Free
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li
                className="Navigation-items-item"
                data-has-button
                data-nav-buton="true"
              >
                <div
                  className="NavigationItem-m"
                  data-button="true"
                  data-button-style="primary"
                >
                  <div className="NavigationItem-text">
                    <a
                      className="NavigationItem-button primary"
                      href="https://www.gonitro.com/pricing"
                      data-has-alternate-text="true"
                      data-cms-ai="0"
                    >
                      <span className="NavigationItem-button-label">Buy Now</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
