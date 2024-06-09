
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
const Header = () => {
    let navigate=useNavigate();

    function handleClick(){
        localStorage.removeItem("authToken");
    }
  return (
    <>
      <div className="w-[100%] bg-[#0a0a4d] flex flex-row-[20% 80%]   ">
        <div className="w-[20%] p-5 text-[18px] text-[white] font-bold">Go Food</div>
        <div className=" flex justify-end justify-items-end w-[100%]">
          <ul className="flex gap-10 justify-end p-5 justify-items-center ">
            <li className="text-[18px] text-[white] font-bold hover:scale-105"><Link to="/">
              
              Home 
            </Link></li>
            <li className="text-[18px] text-[white] font-bold hover:scale-105"><Link to="/">
              About
            </Link></li>
            <li className="text-[18px] text-[white] font-bold hover:scale-105" ><Link to="/">
              Contact Us
            </Link></li>
            {localStorage.getItem("authToken") ? <li>My Orders</li> : ""}
          </ul>

          <div className="flex flex-row gap-2 m-5">
            {(!localStorage.getItem("authToken")) ? (
              <>
                
                <button onClick={handleClick}><Link to="/login" className="bg-green-500 hover:bg-green-800 text-white p-2 rounded">
                  Login
                </Link></button>
                <Link to="/signup" className="bg-green-500 hover:bg-green-800 text-white p-2 rounded">
                  SignUp
                </Link>
              </>
             ) : (
              <>
                {/* <Link to="/cart" className="bg-green-500 text-white py-2 px-4 rounded">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </Link> */}
                <Cart />
                <div onClick={handleClick}><Link to="/login" className="bg-red-500 text-white py-2 px-4 rounded">
                  Logout
                </Link></div>
              </>
             )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
