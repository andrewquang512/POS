import React from 'react'
import "./index.css"
const ProductInCart = () => {
    return (
        <>
         
         <li className="cart-item">

<img src="https://cdn.tgdd.vn/2020/08/CookProduct/3-1200x676-2.jpg" alt="" className="cart-item-img-src" />
<div className="cart-item-content">
    <p className="cart-item-content-title">
        1. Grilled squid satay
    </p>
    <div className="cart-item-content-add-list">
        <div className="cart-item-content-add-item">
        <p className="cart-item-content-add-item-title">
            Đồ ăn thêm: Rau thơm
        </p>
        <p className="cart-item-content-add-item-price">kr 5.50</p>

        </div>
        <div className="cart-item-content-add-item">
        <p className="cart-item-content-add-item-title">
            Đồ ăn thêm: Rau thơm
        </p>
        <p className="cart-item-content-add-item-price">kr 5.50</p>

        </div>
    </div>
    <div className="cart-item-content-bottom">
        <div className="cart-item-content-bottom-button">
        <i class="fas fa-minus"></i> 1 <i class="fas fa-plus"></i>
        </div>
        <div className="cart-item-content-bottom-price">
        <p className="cart-item-content-bottom-price-origin">Kr 123.00</p>
        <p className="cart-item-content-bottom-price-tax">
            (Incl.tax 10% = Kr 12.30)
        </p>
        </div>
    </div>
</div>
</li>   
        </>
    )
}

export default ProductInCart
