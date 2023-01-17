import React, { createContext, useEffect, useReducer } from "react";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

import { products } from "./products";

export const CartContext = createContext();

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, {
    items: products,
    totalAmount: 0,
    totalItems: 0,
  });

  // remove or delete indivitual item
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  // clear all item
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_ALL",
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
    // console.log("awesome");
  }, [state.items]);
  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;

// export const Global = () => {
//   return useContext(CartContext);
// };
