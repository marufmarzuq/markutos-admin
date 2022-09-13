import React from "react";

const ImagesForm = () => {
  return (
    <div className="single-widget">
      <div className="widget-title">Product Images</div>
      <div className="widget-container">
        <div className="product-images-container">
          <div className="ap-single-content">
            <div>
              <p>Main Images</p>
              <span className="helper-text">(600x600)</span>
            </div>
            <div>
              <div className="custom-browse">
                <div>Browse</div>
                <div>Choose File</div>
              </div>
              <span className="helper-text">
                These images are visible in product details page gallery. Use
                600x600 sizes images
              </span>
            </div>
          </div>
          <div className="ap-single-content">
            <div>
              <p>Thumbnail Image</p>
              <span className="helper-text">((300x300)</span>
            </div>
            <div>
              <div className="custom-browse">
                <div>Browse</div>
                <div>Choose File</div>
              </div>
              <span className="helper-text">
                This image is visible in all product box. Use 300x300 sizes
                image. Keep some blank space around main object of your image as
                we had to crop some edge in different devices to make it
                responsive.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesForm;
