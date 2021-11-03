import React from 'react'
import "./index.css"
// import { useState } from 'react';

const ProductInCart = (props) => {

	return (
		<>
			<li key={props.item.SKU} className="cart-item">
				<img src={props.item.image} alt="" className="cart-item-img-src" />
				<div className="cart-item-content">
					<p className="cart-item-content-title">1. {props.item.name}</p>
					<a
						className="removeItem"
						onClick={props.context.removeProductFromCart.bind(
							this,
							props.item.SKU, props.item.quantity
						)}
						href
					>
						&times;
					</a>
					<div className="cart-item-content-add-list">
						<div className="cart-item-content-add-item">
							<p className="cart-item-content-add-item-title">
								Description: {props.item.description}
							</p>
						</div>
					</div>
					<div className="cart-item-content-bottom">
						<div className="cart-item-content-bottom-button">
							<i class="fas fa-minus" onClick={props.context.removeProductFromCart.bind(
								this,
								props.item.SKU, 1
							)}></i>
							{props.item.quantity}
							<i class="fas fa-plus" onClick={props.context.addProductToCart.bind(
								this,
								props.item, 1
							)}></i>
						</div>
						<div className="cart-item-content-bottom-price">
							<p className="cart-item-content-bottom-price-origin">{props.item.price * props.item.quantity} .000 Đ</p>
							<p className="cart-item-content-bottom-price-tax">(Incl.tax 10% = Kr {props.item.price * props.item.quantity * 0.1})</p>
						</div>
					</div>
				</div>
			</li>
		</>
	)
}

export default ProductInCart
