export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      items: state.items.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_ALL") {
    return {
      ...state,
      items: [],
    };
  }

  if (action.type === "INCREMENT") {
    const updatedCart = state.items.map((curElem) => {
      if (curElem.id === action.payload) {
        return {
          ...curElem,
          quantity: curElem.quantity + 1,
        };
      }
      return curElem;
    });
    return {
      ...state,
      items: updatedCart,
    };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.items
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return {
            ...curElem,
            quantity: curElem.quantity - 1,
          };
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    return {
      ...state,
      items: updatedCart,
    };
  }

  if (action.type === "GET_TOTAL") {
    const { totalItems, totalAmount } = state.items.reduce(
      (accem, curVal) => {
        let { quantity, price } = curVal;

        let updatedAmount = price * quantity;

        accem.totalAmount += updatedAmount;

        accem.totalItems += quantity;
        return accem;
      },
      {
        totalItems: 0,
        totalAmount: 0,
      }
    );
    return {
      ...state,
      totalItems,
      totalAmount,
    };
  }

  return state;
};
