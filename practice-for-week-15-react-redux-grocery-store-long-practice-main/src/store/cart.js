
const ADD_ITEM = "cart/ADD_ITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";
const REDUCE_ITEM = "cart/REDUCE_ITEM";
const EMPTY_CART = "cart/EMPTY_CART";

export default function cartReducer(state = {}, action) {
    const newState = {...state}
    switch(action.type) {
        case ADD_ITEM:
            if (newState[action.productId]) {
                newState[action.productId]["count"] += 1;
            } else {
                newState[action.productId] = {id: action.productId, count: 1};
            }
            return newState
            break
        case REMOVE_ITEM:
            if (newState[action.productId]) {
                delete newState[action.productId]
            }
            return newState
        case REDUCE_ITEM:
            if (newState[action.productId]) {
                newState[action.productId]["count"] -= 1;
                if (newState[action.productId]["count"] < 1) {
                    delete newState[action.productId]
                }
            }
            return newState
        case EMPTY_CART:
            return {}
        default:
        return state
    }
};

export function addToCart(productId) {
    return {
        type: ADD_ITEM,
        productId
    }
};

export function removeFromCart(productId) {
    return {
        type: REMOVE_ITEM,
        productId
    }
};

export function reduceFromCart(productId) {
    return {
        type: REDUCE_ITEM,
        productId
    }
}

export function emptyCart(productId) {
    return {
        type: EMPTY_CART,
        productId
    }
}
