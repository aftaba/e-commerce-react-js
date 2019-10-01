import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import Product from './components/product'
import Cart from './components/cart'
import CartSummary from './components/cartsummary'



class App extends Component {
    
    constructor() {
        super();
        this.renderEachProduct = this.renderEachProduct.bind(this);
        this.renderEachCartItem = this.renderEachCartItem.bind(this);
        this.appAddItemToCart = this.appAddItemToCart.bind(this);
    
        this.appRemoveOneQtyFromCart = this.appRemoveOneQtyFromCart.bind(this);
        this.appRemoveAllQtyFromCart = this.appRemoveAllQtyFromCart.bind(this);
        
        this.getTotalCartPrice = this.getTotalCartPrice.bind(this);
        this.getTotalCartQty = this.getTotalCartQty.bind(this);
        
        this.appUpdateQty = this.appUpdateQty.bind(this);

        this.state = {
            products : [
                { 
                    id : 9,
                    name : "MacBooks", 
                    price : 599,
                    imageURL : "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macos-sierra-macbook-pro-setup-touch-id-hero.jpg"
                },
                { 
                    id : 16,
                    name : "RedMi 4A", 
                    price : 99,
                    imageURL : "https://5.imimg.com/data5/FN/KS/MY-43038523/redmi-4-500x500.jpg"
                },
                { 
                    id : 32,
                    name : "HP Laptop", 
                    price : 499,
                    imageURL : "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05975778.png"
                }
            ],
            cartItems : [ 
                { id : 32, qty : 5 },
                { id : 9, qty : 4 }
            ],
        
        };
    }
    // this is add item to card section
    appAddItemToCart( id ) {
        var cartItem = this.state.cartItems;
        var found = false;
        for( let i=0; i < cartItem.length; i++) {
            let item_id = cartItem[i].id;
            let item_qty = cartItem[i].qty;
            if( item_id == id ) {
                found = true;
                cartItem[i].qty = item_qty + 1 ;
                this.setState( { cartItems : cartItem } );
               
            }
        }

        if ( !found ) {
            var new_item_to_add = { id : id , qty : 1 };
            cartItem.push( new_item_to_add );
            this.setState( { cartItems : cartItem } );
        }
    }

    appRemoveOneQtyFromCart( id ) {
        var cartItem = this.state.cartItems;
        for( let i=0; i < cartItem.length; i++) {
            let item_id = cartItem[i].id;
            let item_qty = cartItem[i].qty;

            if (  item_id == id ) {
                if ( item_qty > 0 ) {
                    cartItem[i].qty = item_qty -1 ;
                    this.setState( { cartItems : cartItem } );
                }
            }
        }
    }
    
    appRemoveAllQtyFromCart( id ) {
        var cartItem = this.state.cartItems;
        for( let i=0; i < cartItem.length; i++) {
            let item_id = cartItem[i].id;
            let item_qty = cartItem[i].qty;

            if (  item_id == id ) {
                if ( item_qty > 0 ) {
                    cartItem[i].qty = 0 ;
                    this.setState( { cartItems : cartItem } );
                }
            }
        } 
        
    }

    appUpdateQty( id, qty ) {
        var cartItem = this.state.cartItems;
        for( let i=0; i < cartItem.length; i++) {
            let item_id = cartItem[i].id;
            let item_qty = cartItem[i].qty;

            if (  item_id == id ) {
                if ( item_qty > 0 ) {
                    cartItem[i].qty = qty ;
                    this.setState( { cartItems : cartItem } );
                }
            }
        }
    }
    
    renderEachProduct( product, i) {
        return ( 
            <Product addItems={this.appAddItemToCart}  key={product.id} index={product.id} product_id={product.id} price={product.price} imgURL={product.imageURL}> {product.name} </Product>
        );
    }

    renderEachCartItem( id_qty ) {
        var product = this.state.products;
        for( let i=0; i< product.length; i++ ) {
            if ( product[i].id == id_qty.id ) {
                if (  id_qty.qty > 0 ) {  
                    return ( 
                        <Cart updateQty={this.appUpdateQty} removeOneQty={this.appRemoveOneQtyFromCart} removeAllQty={this.appRemoveAllQtyFromCart} product_id={id_qty.id} qty={id_qty.qty} key={id_qty.id} index={id_qty.id} price={product[i].price} imgURL={product[i].imageURL}> {product[i].name} </Cart>
                    );
                }
            }
        }
        
    }

    getTotalCartPrice() {
        var cartItem = this.state.cartItems;
        var product = this.state.products;
        let total_price = 0;
        for( let i=0; i < cartItem.length; i++) {
            let item_id = cartItem[i].id;
            let item_qty = cartItem[i].qty;
            for( let j=0; j< product.length ; j++ ) {
                if ( product[j].id === item_id ) {
                    total_price = total_price + ( product[j].price * item_qty );
                }
            }
        }
        
        return total_price.toString(); 

    }

    getTotalCartQty() {
        var cartItem = this.state.cartItems;
        let total_qty = 0;
        for( let i=0; i < cartItem.length; i++) {
            let item_qty = cartItem[i].qty;
            total_qty += item_qty;
        }
        return total_qty.toString(); 

    }
    render() {
        return (
            <div className="container">
                <div className="col-md-8">
                    {  this.state.products.map( this.renderEachProduct ) }
                </div>
                <div className="col-md-4">
                    <h2 className="text-center">Cart </h2>
                    {  this.state.cartItems.map( this.renderEachCartItem ) }
                    <CartSummary price={ this.getTotalCartPrice() } qty={ this.getTotalCartQty() } />
                </div>

            </div>
        );
    }
}

export default App;
