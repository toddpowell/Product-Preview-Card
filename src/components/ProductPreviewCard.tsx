const ProductPreviewCard = () => {
  return (
    <>
      <div className="prc-wrapper">
        <div className="prc-left-panel">
          <picture>
            <source
              media="(min-width:650px)"
              srcSet="./src/assets/images/image-product-desktop.jpg"
            />
            <source
              media="(min-width:465px)"
              srcSet="./src/assets/images/image-product-mobile.jpg"
            />
            <img
              src="./src/assets/images/image-product-desktop.jpg"
              alt="Flowers"
            />
          </picture>
        </div>

        <div className="prc-right-panel">content</div>
      </div>
    </>
  );
};

export default ProductPreviewCard;
