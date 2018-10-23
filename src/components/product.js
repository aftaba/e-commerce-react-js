import React, { Component } from 'react';
import '../bootstrap.css';
import '../App.css';

class Product extends Component {
	constructor() {
		super();
		this.addItemToCart = this.addItemToCart.bind(this);
	}

	addItemToCart( e ) {
		let product_id = e.target.getAttribute("data-product_id");
		this.props.addItems( product_id );
	}

	render() {
		return (
			<div className="row product-wrapper">
				<div className="col-md-4">
					<img src={this.props.imgURL} className="img-responsive" />
				</div>
				<div className="col-md-4">
					<h4>{this.props.children}</h4>
				</div>
				<div className="col-md-4">
					<h3>$ {this.props.price}</h3>
					<button data-product_id={this.props.product_id} onClick={this.addItemToCart} className="btn btn-primary">Add to Cart</button>
				</div>
				
			</div>
		);
	}
}

export default Product;
