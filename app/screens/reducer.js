export const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((curItem) => {
      if (curItem.id === action.payload) {
        return { ...curItem, quantity: curItem.quantity + 1 };
      }
      return curItem;
    });
    return { ...state, item: updatedCart };
  }

  if (action.type === "DECREMENT") {
    let updatedCart = state.item.map((curItem) => {
      if (curItem.id === action.payload) {
        return { ...curItem, quantity: curItem.quantity - 1 };
      }
      return curItem;
    });
    return { ...state, item: updatedCart };
  }

  return state;
};
