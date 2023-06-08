import produceData from "../mockData/produce.json"

const POPULATE = "produce/POPULATE"; //duck naming convention

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            let newState = {};
    //making the array of products into a hash for faster more optimized lookup time known as normalizing
            action.produce.forEach(product => {
               newState[product.id] = product;
            })
            return newState;
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
