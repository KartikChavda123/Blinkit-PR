import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/todoslice";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { BiSolidFoodMenu } from "react-icons/bi";
import { RiEBike2Fill } from "react-icons/ri";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

export default function Nav() {
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.todoskey);

  const totalItems = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity * item.price,0);
  const totalPrice1 = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity * item.price + 4,0);

  return (
    <div>
      <header className="border">
        <div className="nav h-[86px] flex">
          <div className="logo  h-[100%] w-[178px] overflow-hidden">
            <img src="logo.jpg" alt="" className="mt-[-46px]" />
          </div>

          <div className="location h-[100%] w-[320px] flex justify-center items-center">
            <div className="text h-[41.65px] w-[229.2px]">
              <h3 className="font-bold text-[18px] ">Delivery in 8 minutes</h3>
              <p className="flex pb-8 text-[13px]">
                Rajkot, Gujarat, India <IoMdArrowDropdown className="text-1.5xl mt-1" />
              </p>
            </div>
          </div>

          <div className="search h-[100%] w-[697px] flex items-center">
            <IoIosSearch className="text-2xl absolute left-[515px]" />
            <input
              type="search"
              className="h-[46px] w-[671.6px] border bg-[#f8f8f8] rounded-[12px] text-[#828282] pl-[48px] pr-[30px] text-[16px]"
              placeholder='Search "milk"'
            />
          </div>

          <div className="login h-[100%] w-[162px] flex justify-center items-center">
            <p className="text-[19px] text-[#363636]">Login</p>
          </div>

          <div className="cart h-[100%] w-[112px] flex justify-center items-center">

            <button className="flex justify-evenly items-center h-[52px] w-[112px] bg-[#0c831f] rounded-[8px] text-white font-bold text-[14px] " onClick={() => setIsCartOpen(!isCartOpen)}>
              <div><AiOutlineShoppingCart className="text-white text-2xl ml-[5px]" /></div>
              <div>{totalItems > 0 ? `${totalItems} Items ₹${totalPrice.toFixed(2)}` : "My Cart"}</div>
            </button>
          </div>
        </div>
        <div className="navigation h-[47px] w-[100%] border flex justify-center items-center">
          <div className="nav h-[100%] w-[1203px] flex justify-between">
            <div className="item text-[14px] px-[14px] py-[13px]">Vegetable & Fruits</div>
            <div className="item text-[14px] px-[14px] py-[13px]">Dairy & Breakfast</div>
            <div className="item text-[14px] px-[14px] py-[13px]">Munchies</div>
            <div className="item text-[14px] px-[14px] py-[13px]">Cold Drinks & Juices</div>
            <div className="item text-[14px] px-[14px] py-[13px]">Instant & Frozen Food</div>
            <div className="item text-[14px] px-[14px] py-[13px]">
              Tea, Coffee & Health Drinks
            </div>
            <div className="item text-[14px] px-[14px] py-[13px]">Bakery & Biscuits</div>
            <div className="item text-[14px] px-[14px] py-[13px]">More</div>
          </div>
        </div>

      </header>

      {isCartOpen && (
        <div className="cart-slide fixed top-0 right-0 h-full w-[364px] bg-[#fbfbfd] shadow-lg overflow-y-auto z-50" >
          <div className="border-b h-[58.15px] w-[100%] bg-white p-[18px]">
            <h2 className="text-[16px] font-bold">My Cart</h2>
            <button className="absolute top-4 right-4 text-black" onClick={() => setIsCartOpen(false)} > ✕ </button>
          </div>

          <div className="h-[75px] w-[90%] ml-[5%] mr-[5%] bg-white  rounded-[15px] mt-[5%] p-[2.5%] flex justify-center items-center">
            <div className="h-[95%] w-[95%]  flex items-center">
              <div className="h-[48px] w-[48px] bg-[#f8f8f8] rounded-[12px] flex justify-center items-center"><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" className="h-[80%]" /></div>
              <div className="pl-[5%]">
                <h1 className="font-bold">Delivery in 8 minutes</h1>
              </div>
            </div>
          </div>
          <div className="h-[auto] w-[90%] ml-[5%] mr-[5%] bg-white pt-[5%]  rounded-[15px] p-[2.5%]  justify-center items-center">
            {totalItems > 0 ? (
              Object.values(cart).map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-4  pb-4" >
                  <div className="h-[70px] w-[90px]">
                    <img src={item.image} alt="" className="h-[100%] w-[100%] overflow-hidden" />
                  </div>
                  <div className="pl-[3%] w-[121px]">
                    <p className="font-normal text-[13px]">{item.name}</p>
                    <p className="font-normal text-[11px] text-[#858585]">{item.weight}</p>
                    <span className="font-bold text-[13px]">₹{item.price}</span>
                    <span className="line-through text-[12px] ml-[5px]">{item.deleteprice}</span>
                  </div>
                  <div className="flex items-center border border-[#318616] rounded-[6px] bg-[#328616] text-white mt-[15%]">
                    <button onClick={() => dispatch(removeFromCart(item.id))} className="h-[30px] w-[20px]"> - </button>

                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => dispatch(addToCart(item))} className="h-[30px] w-[20px]" >+</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty!</p>
            )}
          </div>

          <div className="h-[auto] w-[90%] ml-[5%] mt-[5%] pl-[12px] bg-white rounded-[15px] pt-[12px]">
            <h1 className="text-[15px] text-[#363636] pb-[8px] font-bold font-sans">Bill details</h1>

            <div className="flex justify-between pb-[12px]">
              <div className="w-[201.13px] ">
                <div className="h-[22px]"><span className=" flex items-center text-[14px]"><BiSolidFoodMenu />&nbsp;&nbsp;Item Total</span></div>
                <div className="h-[22px]"><span className=" flex items-center text-[14px]"><RiEBike2Fill />&nbsp;&nbsp;Delivery charge</span></div>
                <div className="h-[22px]"><span className=" flex items-center text-[14px]"><IoBagHandleSharp />&nbsp;&nbsp;Handling charge</span></div>
              </div>

              <div className="w-[134px] ">
                <div className="h-[22px] text-[14px] pl-[55px]">₹{totalPrice.toFixed(2)}</div>
                <div className="h-[22px] text-[14px] pl-[55px] text-[#256fef]"><span className="line-through text-[13px] text-black">₹25</span> <span>FREE</span></div>
                <div className="h-[22px] text-[14px] pl-[55px]">₹4</div>
              </div>

            </div>
          </div>

          <div
            className="TOTAL p-4 h-[57px] w-[364px] bg-[#0c831f] text-white flex justify-evenly items-center"
            style={{
              position: "fixed",
              bottom: "5px",
              right: "0",
              boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
              zIndex: "10",
            }}
          >
            <div className="h-[37px] w-[96px] flex flex-col rounded-[12px]">
              <div className="text-[15px] font-bold">₹ {totalPrice1.toFixed(2)}</div>
              <div className="text-[12px] mt-[1px] text-[#fff] font-light tracking-widest uppercase">
                Total
              </div>
            </div>
            <h3 className="font-semibold flex items-center ml-[45px]">
              Login to Proceed &nbsp;<FaChevronRight />
            </h3>
          </div>
          <div className=" h-[117px] w-[90%] ml-[5%] bg-white rounded-[12px] pt-[12px] pl-[12px] pr-[16px] mb-[50px]">
            <h1 className="text-[15px] font-bold mb-[4px]">Cancellation Policy</h1>
            <p className="text-[12px] font-[400] text-[#828282]">Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
          </div>
        </div>

      )}

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </div>
  );
}