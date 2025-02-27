
import { Button } from "@mui/material";
import { CartItems } from "./cartItems";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../State/Cart/Action";


export function Cart() {

    const navigate = useNavigate();
    const {cart} = useSelector(store=>store);
    const dispatch = useDispatch();

    const handleCheckout = () =>{
        navigate("/checkout?step=2")
    }

    useEffect(()=>{
          dispatch(getCart())
    },[cart.updateCartItem, cart.deleteCartItem, dispatch])
    return (
        <div className="">
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className=" col-span-2">
                    {cart.cart?.cartItems.map(item=><CartItems key={item._id} item={item}/>)}
                    
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 p-1 lg:mt-0">
                    <div className="shadow-lg rounded-xl">
                        <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                        <hr />
                        <div className="space-y-3 p-1 font-semibold mb-10">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>&#8377; {cart.cart?.totalPrice}</span>
                            </div>
                            <div className="flex justify-between pt-3  ">
                                <span>Discount</span>
                                <span className="text-green-600">&#8377; {cart.cart?.discount}</span>
                            </div>
                            <div className="flex justify-between pt-3  ">
                                <span>Delevery Charge</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between pt-3   font-bold">
                                <span>Total Amount</span>
                                <span className="text-green-600">&#8377; {cart.cart?.totalDiscountedPrice}</span>
                            </div>

                        </div>
                        <Button onClick={handleCheckout} className="w-full mt-5" variant="contained" sx={{ px: "2.5rem", py: "0.7rem", bgColor: "#9155fd" }}>
                                    Checkout
                                </Button>
                    </div>

                </div>
            </div>


        </div>
    )
}