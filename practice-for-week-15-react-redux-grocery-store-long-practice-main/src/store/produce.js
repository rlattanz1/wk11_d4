import produceData from "../mockData/produce.json"


const POPULATE = "produce/POPULATE"; //duck naming convention
const LIKE_PRODUCE = "produce/LIKE_PRODUCE"

export const getAllProduce = (state) => Object.values(state.produce);

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            let newState = {};
    //making the array of products into a hash for faster more optimized lookup time known as normalizing
            action.produce.forEach(product => {
               newState[product.id] = product;
            })
            return newState;
        case LIKE_PRODUCE:
            let nextState = JSON.parse(JSON.stringify(state));  //this is a deep dup of the current state cool!
            nextState[action.productId]["liked"] = !nextState[action.productId]["liked"]
            return nextState
      default:
        return state;
    }
  };

export function populateProduce() {
    let id=Math.floor(Math.random()*10000);
    return {    //this is our action and our action must be an object and that requires curlys
        type: POPULATE,
        id,
        produce: produceData
    }
};

export function toggleLikeProduce(productId) {
    return {
        type: LIKE_PRODUCE,
        productId
    }
}
