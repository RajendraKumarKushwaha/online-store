import { Route, Routes } from "react-router-dom";
import { HomePage } from '../customer/pages/homepage/homepage'
import { Cart } from "../customer/components/cart/cart";
import { Navigation } from "../customer/components/navigation/navigation";
import { Footer } from "../customer/components/footer/footer";
import { Product } from '../customer/components/product/product'
import { ProductDetails } from '../customer/components/productDetails/productDetails'
import { Checkout } from "../customer/components/checkout/checkout";
import { Order } from "../customer/components/order/order";
import { OrderDetails } from "../customer/components/order/orderDetails";
export function CustomerRoutes() {
    return (
        <div>
            <div>
                <Navigation />
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account/order" element={<Order />} />
                <Route path="/account/order/:orderId" element={<OrderDetails />} />


            </Routes>

            <div>
                <Footer />
            </div>

        </div>
    )
}