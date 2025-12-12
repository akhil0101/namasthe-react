import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { reslog_URL } from "../service/constants";
import { log_URL } from "../service/constants";
import UseContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  console.log("Header is rendering");
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UseContext);

  const cartItems = useSelector((store) => store.cart.items);
  useEffect(() => {
    console.log("useEffect function is invoked");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between  bg-slate-200 shadow-md m-2">
      <div>
        <img className="w-56" src={log_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              //  console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
