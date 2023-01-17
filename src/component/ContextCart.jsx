import React, { useContext } from "react";
import { CartContext } from "./Cart";

import { Scrollbars } from "react-custom-scrollbars-2";
import Item from "./Item";
const ContextCart = () => {
  const { items, clearCart, totalItems, totalAmount } = useContext(CartContext);
  if (items.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="./cart.png" alt="cart" />
            <p>{totalItems}</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>shopping cart</h1>
          <p className="total-items">
            you have
            <span className="total-items-count" onClick={() => totalItems()}>
              {totalItems}
            </span>
            items in shopping cart
          </p>
          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {items.map((currItem) => {
                  return <Item key={currItem.id} {...currItem} />;
                })}
              </Scrollbars>
            </div>
          </div>
          <div className="card-total">
            <h3>
              cart total <span>{totalAmount} ₹</span>
            </h3>
            <button>checkout</button>
            <button className="clear-cart" onClick={() => clearCart()}>
              Clear Cart
            </button>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./cart.png" alt="cart" />
          <p>{totalItems}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          you have
          <span className="total-items-count" onClick={() => totalItems()}>
            {totalItems}
          </span>
          items in shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {items.map((currItem) => {
                return <Item key={currItem.id} {...currItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            cart total <span> {totalAmount} ₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
