import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import CategoryListItems from "./CategoryListItems";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-4 p-4">
      <div className=" text-xl font-bold">cart</div>
      <div className="w-7/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          clear
        </button>
        <CategoryListItems items={items} />
      </div>
    </div>
  );
};

export default Cart;
