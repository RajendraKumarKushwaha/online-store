import { Box, Button, Grid, TextField } from "@mui/material";
import { AddressCard } from "../addressCard/addressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

export function DeleveryAddressForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {auth} = useSelector(store=>store);
    console.log("auth user ",auth.user)
    const handleSubmit=(e) =>{
        e.preventDefault();
       
        const data = new FormData(e.currentTarget);

        const address = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("streetAddress"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zipCode"),
            mobile:data.get("mobile"),
            
        }
        const orderData = {address,navigate}
        console.log("orderData",orderData); 
       
        dispatch(createOrder(orderData))
       
       
        
        
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className="border rounded-md shadow-md h-[30.5rem]  overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer">
                        {auth.user?.address.map((item)=><AddressCard address={item}/>) }
                        <Button sx={{ mt: 2, bgcolor: "RBG(145 85 253)" }} size="large" variant="contained">delever here</Button>
                    </div>

                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required id="streetAddress" name="streetAddress" label="Address" fullWidth autoComplete="given-name" multiline rows={4} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="city" name="city" label="City" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="state" name="state" label="state" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="zipCode" name="zipCode" label="Zip" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="mobile" name="mobile" label="PhoneNumber" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Button sx={{ py:1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size="large" variant="contained" type="submit">delever here</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>

                </Grid>

            </Grid>
        </div>
    )
}