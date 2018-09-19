import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfItemsInCart: this.props.numberOfItemsInCart
    };
  }
  addToCart = () => {
    const current = this.state.numberOfItemsInCart;
    this.setState({
      numberOfItemsInCart: current + 1
    });
  };
  render() {
    // console.log(this.state.numberOfItemsInCart);
    let productDetails = this.props.products.map(p => p);

    return (
      <div className="App">
        <Header numberOfItemsInCart={this.state.numberOfItemsInCart} />

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="lead">Shop Name</p>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Category 1
                </a>
                <a href="#" className="list-group-item">
                  Category 2
                </a>
                <a href="#" className="list-group-item">
                  Category 3
                </a>
              </div>
            </div>

            <div className="col-md-9">
              <Carousel />
              <div className="row">
                {productDetails.map(product => {
                  return (
                    <ProductDetail
                      product={{
                        price: product.price,
                        name: product.name,
                        description: product.description,
                        reviews: product.reviews,
                        rating: product.rating
                      }}
                      addToCart={this.addToCart}
                    />
                  );
                })}

                {/*
                      <div className="col-sm-4 col-lg-4 col-md-4">
                          <h4><a href="#">Like this template?</a>
                          </h4>
                          <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                          <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                      </div>
  */}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <hr />

          {<Footer />}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  product: PropTypes.object
};

export default App;
