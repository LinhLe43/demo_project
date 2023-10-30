import React from "react";
import "./style.css";

function Content() {
  return (
    <div className="Page-content">
      <div className="PromoLeadC">
        <div className="PromoLeadC-container">
          <div className="PromoLeadC-content">
            <h1 className="PromoLeadC-title" data-font-style="title-3">
              Trusted PDF &amp; eSign software for all industries
            </h1>
            <div
              className="PromoLeadC-description"
              data-no-top-margin=""
              data-font-style="description-2"
            >
              Secure, compliant, and affordable PDF &amp; eSign solutions with
              integrated security for eSignatures.
            </div>
            <div
              className="PromoLeadC-cta"
              data-cta-size=""
              data-button-style="primary"
              data-secondary-cta=""
            >
              <a
                className="button-primary "
                href="https://www.gonitro.com/try-for-free"
                data-cms-ai="0"
              >
                Get started free
              </a>
              <a
                className="button-tertiary "
                href="https://www.gonitro.com/pricing"
                data-cms-ai="0"
              >
                Plans &amp; pricing
              </a>
            </div>
          </div>
          <div className="PromoLeadC-media">
            <picture>
            <img className="Image" data-image-size="leadPromoLargeImage" alt="nitro-windows-allgraphic-hero.png" srcSet="https://resources.gonitro.com/dims4/default/8c361a6/2147483647/strip/true/crop/2824x1002+0+0/resize/2480x880!/quality/90/?url=http%3A%2F%2Fnitro-brightspot.s3.us-west-2.amazonaws.com%2F86%2F99%2Fb98378fd4f3291dd34607a5560d0%2Fnitro-windows-allgraphic-hero.png 2x" width="1240" height="440" src="https://resources.gonitro.com/dims4/default/8129a4d/2147483647/strip/true/crop/2824x1002+0+0/resize/1240x440!/quality/90/?url=http%3A%2F%2Fnitro-brightspot.s3.us-west-2.amazonaws.com%2F86%2F99%2Fb98378fd4f3291dd34607a5560d0%2Fnitro-windows-allgraphic-hero.png"/>
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
