import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export function CartItems() {
    return (
        <div className="p-5 shadow-lg rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" />

                </div>
                <div className="ml-5 space-x-1">
                    <p className="font-semibold">Men slim Shirt</p>
                    <p className="opacity-70">Size: L,White</p>
                    <p className="opacity-70 mt-2">Seller: ZARA</p>
                    <div className='flex space-x-5 items-center  text-gray-900 mt-6'>
                        <p className='font-semibold'>199</p>
                        <p className='opacity-50 line-through'>299</p>
                        <p className='text-green-600 font-semibold'>50% off</p>
                    </div>
                </div>
              
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex items-center space-x-2">
                        <IconButton sx={{color:"blue"}}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className="py-1 px-7 border rounded-sm">3</span>
                        <IconButton sx={{color:"blue"}}>
                            <AddCircleOutlineIcon />
                        </IconButton>

                    </div>
                    <div>
                        <Button sx={{color:"blue"}}>remove</Button>
                    </div>

                </div>

        </div>
    )
}