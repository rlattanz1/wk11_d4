import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { toggleLikeProduce } from "../../store/produce";

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          onClick={() => dispatch(toggleLikeProduce(produce.id))}
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          onClick={() => dispatch(addToCart(produce.id))}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
