export const initialState = {
    Cart: [],
};
export const getCartTotal = (cart) => {
    if (cart.length) {
        const amounts = [];
        cart.forEach((item) => {
            amounts.push(item.finalPrice * item.quantity);
        });
        const total = amounts.reduce((amount, item) => item + amount, 0);
        return total;
    } else {
        return 0;
    }
};
export const trackCartItemsCount = (cart) => {
    if (cart.length) {
        const quantities = [];
        cart.forEach((item) => {
            quantities.push(item.quantity);
        });
        const total = quantities.reduce((amount, item) => item + amount, 0);
        return total;
    } else {
        return 0;
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let newAddCart = [...state.Cart];

            const addIndex = state.Cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            if (addIndex >= 0) {
                newAddCart[addIndex].quantity += 1;
            } else {
                return {
                    ...state,
                    Cart: [...state.Cart, action.item],
                };
            }

            return {...state, Cart: newAddCart };

        case "REMOVE_FROM_Cart":
            let newCRemoveCart = [...state.Cart];

            const removeIndex = state.Cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            if (removeIndex >= 0) {
                newCRemoveCart.splice(removeIndex, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in cart`
                );
            }
            return {...state, Cart: newCRemoveCart };
        case "INCREMENT_ITEM_QUANTITY":
            let newIncrementedCart = [...state.Cart];

            const indexToIncrement = state.Cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            if (indexToIncrement >= 0) {
                newIncrementedCart[indexToIncrement].quantity += 1;
            } else {
                console.warn(
                    `Can't add more items with (id: ${action.id}) as its not in cart`
                );
            }

            return {...state, Cart: newIncrementedCart };

        case "DECREMENT_ITEM_QUANTITY":
            let newDecrementedCart = [...state.Cart];

            const indexToDecrement = state.Cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let { quantity } = newDecrementedCart[indexToDecrement];
            if (indexToDecrement !== -1 && quantity > 1) {
                newDecrementedCart[indexToDecrement].quantity -= 1;
            } else if (quantity === 1) {
                newDecrementedCart.splice(indexToDecrement, 1);
            } else {
                console.warn(
                    `Can't remove item with (id: ${action.id}) as its not in cart`
                );
            }

            return {...state, Cart: newDecrementedCart };
        default:
            return state;
    }
};

export default reducer;