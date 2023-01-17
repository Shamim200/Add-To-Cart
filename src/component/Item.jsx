import React, { useContext } from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { CartContext } from "./Cart";
const Item = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="title" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <FaMinus className="minus" onClick={() => decrement(id)} />

          <input type="text" placeholder={quantity} />

          <FaPlus className="add" onClick={() => increment(id)} />
        </div>
        <div className="price">
          <h3>{price}rs</h3>
        </div>
        <div className="remove-item">
          <FaTrashAlt className="remove" onClick={() => removeItem(id)} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Item;
