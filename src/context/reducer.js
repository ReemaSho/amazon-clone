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
export const initialState = {
    Cart: [],
    ItemsCount: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let newAddCart = [...state.Cart];
            let addCount1 = state.ItemsCount;
            const addIndex = state.Cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            if (addIndex >= 0) {
                newAddCart[addIndex].quantity += 1;

                addCount1 += 1;
            } else {
                addCount1 += 1;
                return {
                    ...state,
                    Cart: [...state.Cart, action.item],
                    ItemsCount: addCount1,
                };
            }

            return {...state, Cart: newAddCart, ItemsCount: addCount1 };

        case "REMOVE_FROM_Cart":
            let newCRemoveCart = [...state.Cart];
            let minCount1 = state.ItemsCount;
            const removeIndex = state.Cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            if (removeIndex >= 0) {
                minCount1 = minCount1 - newCRemoveCart[removeIndex].quantity;
                newCRemoveCart.splice(removeIndex, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in cart`
                );
            }
            return {...state, Cart: newCRemoveCart, ItemsCount: minCount1 };
        case "INCREMENT_ITEM_QUANTITY":
            let newIncrementedCart = [...state.Cart];
            let addCount2 = state.ItemsCount;
            const indexToIncrement = state.Cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            if (indexToIncrement >= 0) {
                newIncrementedCart[indexToIncrement].quantity += 1;
                addCount2 += 1;
            } else {
                console.warn(
                    `Can't add more items with (id: ${action.id}) as its not in cart`
                );
            }

            return {...state, Cart: newIncrementedCart, ItemsCount: addCount2 };

        case "DECREMENT_ITEM_QUANTITY":
            let newDecrementedCart = [...state.Cart];
            let minCount2 = state.ItemsCount;
            const indexToDecrement = state.Cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let { quantity } = newDecrementedCart[indexToDecrement];
            if (indexToDecrement !== -1 && quantity > 1) {
                newDecrementedCart[indexToDecrement].quantity -= 1;
                minCount2 -= 1;
            } else if (quantity === 1) {
                minCount2 -= 1;
                newDecrementedCart.splice(indexToDecrement, 1);
            } else {
                console.warn(
                    `Can't remove item with (id: ${action.id}) as its not in cart`
                );
            }

            return {...state, Cart: newDecrementedCart, ItemsCount: minCount2 };
        default:
            return state;
    }
};

export default reducer;