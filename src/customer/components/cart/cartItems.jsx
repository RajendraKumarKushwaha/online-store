import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
export function CartItems({item}) {
    const dispatch = useDispatch();
    const handleUpdateCartItem=(num)=>{
        const data = {data:{quantity:item.quantity+num}, cartItemId:item?._id}
        dispatch(updateCartItem(data));

    }
    const handleRemoveCartItem=()=>{
        dispatch(removeCartItem(item._id))
    }
    console.log("items in cart ",item)
    return (
        <div className="p-5 shadow-lg rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src={item.product.imageUrl} alt="" />

                </div>
                <div className="ml-5 space-x-1">
                    <p className="font-semibold">{item.product.title}</p>
                    <p className="opacity-70">Size: {item?.size}, {item.product.color}</p>
                    <p className="opacity-70 mt-2">Seller: {item.product.brand}</p>
                    <div className='flex space-x-5 items-center  text-gray-900 mt-6'>
                        <p className='font-semibold'>&#8377;{item.product.price}</p>
                        <p className='opacity-50 line-through'>&#8377;{item.product.discountedPrice}</p>
                        <p className='text-green-600 font-semibold'>{item.product.discountedPresent}% off</p>
                    </div>
                </div>
              
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex items-center space-x-2">
                        <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1} sx={{color:"blue"}}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
                        <IconButton onClick={()=>handleUpdateCartItem(1)}  sx={{color:"blue"}}>
                            <AddCircleOutlineIcon />
                        </IconButton>

                    </div>
                    <div>
                        <Button onClick={handleRemoveCartItem} sx={{color:"blue"}}>remove</Button>
                    </div>

                </div>

        </div>
    )
}

CartItems.propTypes = {
    item: PropTypes.shape({
      product: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired, // Ensures title is a required string
        brand: PropTypes.string.isRequired, // Ensures brand is a required string
        discountedPrice: PropTypes.number.isRequired, // Ensures discountedPrice is a required number
        discountedPresent: PropTypes.number.isRequired, // Ensures discountedPresent is a required number
        price: PropTypes.number.isRequired, // Ensures price is a required number
        color: PropTypes.string.isRequired
      }).isRequired, // Ensures product object is required
      size: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired, // Ensures item object is required
  };