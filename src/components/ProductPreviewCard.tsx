import "./ProductPreviewCard.css";

const ProductPreviewCard = () => {
  return (
    <>
      <div className="app-container">
        <div className="prc-wrapper">
          <div className="prc-left-panel">
            <>
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
                  src="./src/assets/images/image-product-mobile.jpg"
                  alt="Flowers"
                />
              </picture>
            </>
          </div>

          <div className="prc-right-panel">
            <div>
              <p>PERFUME</p>
              <h1>Gabrielle Essence Eau De Parfum</h1>
              <p>
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Pervumer-Creator for the House of CHANEL.
              </p>
              <div className="sale-price">$149.99</div>
              <div className="reg-price">$169.99</div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPreviewCard;
