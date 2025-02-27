import { Button } from "@mui/material";
import { AddressCard } from "../addressCard/addressCard";
import { CartItems } from "../cart/cartItems";
import { useDispatch, useSelector } from "react-redux";

import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { createPayment } from "../../../State/payment/Action";

export function OrderSummary() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { order } = useSelector(store => store)
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id")

    console.log("order summary ",order?.order?.orderItems);
    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])

   
   const handleCheckout=()=>{
    dispatch(createPayment(orderId))
   }
   
    return (
        <div>
            <div className="p-5 shadow-lg">
                <AddressCard address={order.order?.shippingAddress}/>
            </div>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className=" col-span-2">
                    {/* {order.order?.orderItems.map(items=><CartItems />)} */}
                    {order?.order?.orderItems?.length > 0 ? (
                        order.order.orderItems.map((item, index) => (
                            <CartItems key={index} item={item} />
                        ))
                    ) : (
                        <p>No items in the order.</p>
                    )}
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 p-1 lg:mt-0">
                    <div className="shadow-lg rounded-xl">
                        <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                        <hr />
                        <div className="space-y-3 p-1 font-semibold mb-10">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>&#8377; {order.order?.totalPrice}</span>
                            </div>
                            <div className="flex justify-between pt-3  ">
                                <span>Discount</span>
                                <span className="text-green-600">&#8377; {order.order?.discount}</span>
                            </div>
                            <div className="flex justify-between pt-3  ">
                                <span>Delevery Charge</span>
                                <span className="text-green-600"> Free</span>
                            </div>
                            <div className="flex justify-between pt-3   font-bold">
                                <span>Total Amount</span>
                                <span className="text-green-600">&#8377; {order.order?.totalDiscountedPrice}</span>
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