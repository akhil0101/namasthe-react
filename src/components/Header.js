import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {reslog_URL} from "../service/constants";
import {log_URL} from "../service/constants";

const Header = () => {
  console.log("Header is rendering")
  const [btnNameReact,setbtnNameReact]= useState("Login")
  useEffect(()=>{
    console.log("useEffect function is invoked")
  },[btnNameReact])
  
return(
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={log_URL} />
    </div>
  <div className="nav-items">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <button className="login" 
          onClick={() => {btnNameReact === "Login" ? setbtnNameReact("Logout"): setbtnNameReact("Login");
          //  console.log(btnNameReact);
         }}>{btnNameReact}</button>
    </ul>
  </div>
  </div>
)
}
export default Header;