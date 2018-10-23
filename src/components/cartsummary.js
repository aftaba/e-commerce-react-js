import React, { Component } from 'react';
import '../bootstrap.css';
import '../App.css';

class CartSummary extends Component {
	
	constructor() {
		super();
	}
	
	render() {
		return (
			<div className="row">
                <h3 className="well" >
                    Total price : {this.props.price} 
                    <br />
                    Total Qty : {this.props.qty}
                </h3>
            </div>
		);
	}
}

export default CartSummary;



