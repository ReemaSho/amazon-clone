export const initialState = {
    Cart: [],
};

const reducer = (state, action) => {
    console.log(action, state);
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, Cart: [...state.Cart, action.item] };

        case "REMOVE_FROM_Cart":
            break;
        default:
            return state;
    }
};

export default reducer;