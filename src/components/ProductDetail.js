import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  let stars = [];
  for (let i = 0; i < props.product.rating; i++) {
    let star = <span className="glyphicon glyphicon-star" />;
    stars.push(star);
  }
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.product.price}</h4>
          <h4>
            <a href="#">{props.product.name}</a>
          </h4>
          <p>{props.product.description}</p>
        </div>
        <div className="addToCart">
          <button onClick={() => props.addToCart()}>Add To Cart</button>
        </div>
        <div className="ratings">
          <p className="pull-right">{`${props.product.reviews} reviews`}</p>
          <p>{stars}</p>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object
};
export default ProductDetail;
