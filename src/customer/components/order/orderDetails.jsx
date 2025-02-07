import { Box, Grid } from "@mui/material";
import { AddressCard } from "../addressCard/addressCard";
import { OrderTracker } from "./orderTracker";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export function OrderDetails() {
    return (
        <div className="lg:px-20 px-5">
            <div>
                <h3 className="font-bold text-xl py-7">Delivery Address</h3>
                <AddressCard />

            </div>
            <div className="py-20">
                <OrderTracker activeStep={3} />
            </div>

            <Grid container className="space-y-5">
                {[1, 1, 1, 1, 1].map(item => <Grid item container className="shadow-xl rounded-md p-5 space-y-5" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className="flex items-center space-x-5">
                            <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" />
                            <div className="space-y-2 ml-5">
                                <p className="font-semibold">Title</p>
                                <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color</span><span>Size: M</span></p>
                                <p>Seller</p>
                                <p>3456</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item>
                        <Box sx={{ color: deepPurple[500] }}>
                            <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                            <span>Rate & Review Product</span>

                        </Box>

                    </Grid>

                </Grid>
                )}
            </Grid>
        </div>
    )
}