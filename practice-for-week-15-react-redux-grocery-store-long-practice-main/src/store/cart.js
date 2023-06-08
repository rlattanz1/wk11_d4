
const ADD_ITEM = "cart/ADD_ITEM"

export default function cartReducer(state = {}, action) {
    switch(action.type) {
        case ADD_ITEM:
            const newState = {...state}
            if (newState[action.productId]) {
                newState[action.productId]["count"] += 1;
            } else {
                newState[action.productId] = {id: action.productId, count: 1};
            }
            return newState
        default:
        return state
    }
};


export function addToCart(productId) {
    return {
        type: ADD_ITEM,
        productId
    }
}
