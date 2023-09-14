import "./ProductPreviewCard.css";

const ProductPreviewCard = () => {
  return (
    <>
      <div className="app-container">
        <div className="wrapper">
          <div className="left-panel">
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
          </div>

          <div className="right-panel">
            <div>
              <p className="tagline">PERFUME</p>
              <h1>
                Gabrielle <br></br>Essence Eau <br></br>De Parfum
              </h1>
              <p className="copy">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Pervumer-Creator for the House of CHANEL.
              </p>
              <div className="prices">
                <div className="sale-price">$149.99</div>
                <div className="reg-price">$169.99</div>
              </div>
              <div className="right-footer">
                <button className="add-to-cart">
                  <svg
                    className="cart-icon"
                    width="15"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                      fill="#FFF"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPreviewCard;
