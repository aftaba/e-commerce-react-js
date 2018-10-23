import React, { Component } from 'react';
import '../bootstrap.css';
import '../App.css';

class Cart extends Component {
	
	constructor() {
		super();
		this.removeOneQtyFromCart = this.removeOneQtyFromCart.bind(this);
		this.removeAllQtyFromCart = this.removeAllQtyFromCart.bind(this);
		this.updateQty = this.updateQty.bind(this);
	}

	
	removeOneQtyFromCart( e ) {
		let product_id = e.target.getAttribute("data-product_id");
		this.props.removeOneQty( product_id );
	}

	removeAllQtyFromCart( e ) {
		let product_id = e.target.getAttribute("data-product_id");
		this.props.removeAllQty( product_id );	
	}

	updateQty( e ) {
		let product_id = e.target.getAttribute("data-product_id");
		this.props.updateQty( product_id, parseInt( e.target.value ) );
	}
	
	render() {
		return (
			<div className="row product-wrapper">
				<div className="row">
					<div className="col-md-4">
						<img src={this.props.imgURL} className="img-responsive" />
					</div>
					<div className="col-md-4">
						<h4>{this.props.children}</h4>
					</div>
					<div className="col-md-4">
						<h3>$ {this.props.price}</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<h3> Quantity : {this.props.qty} </h3>
						<div className="form-group">
							<select data-product_id={this.props.product_id} className="form-control" onChange={this.updateQty} value={this.props.qty}>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<button data-product_id={this.props.product_id} onClick={this.removeOneQtyFromCart} className="btn btn-danger">Remove One Qty</button>
					</div>
					<div className="col-md-6">
						<button data-product_id={this.props.product_id} onClick={this.removeAllQtyFromCart} className="btn btn-danger">Remove Item</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Cart;
