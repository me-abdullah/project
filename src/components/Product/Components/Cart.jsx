import React from "react";
import Product from "./Product";

const Cart = ({ onOrderedQuant, onReset, onShow }) => {
  return (
    <section className="cart">
      <div className="head">
        <p>Cart</p>
      </div>
      <hr />
      <div className="cart-content">
        {onOrderedQuant ? (
          <>
            <Product onOrderedQuant={onOrderedQuant} onReset={onReset} />
            <button
              className="checkout"
              onClick={() => {
                onReset();
                onShow(false);
              }}
            >
              checkout
            </button>
          </>
        ) : (
          <p className="empty">Your Cart Is Empty</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
