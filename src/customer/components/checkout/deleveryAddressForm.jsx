import { Box, Button, Grid, TextField } from "@mui/material";
import { AddressCard } from "../addressCard/addressCard";

export function DeleveryAddressForm() {
    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log("address");
        const data = new FormData(e.currentTarget);

        const address = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            address:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zip:data.get("zip"),
            phoneNumber:data.get("phoneNumber"),
            
        }
        console.log("data",data);
        
        console.log("address",address);
        
        
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className="border rounded-md shadow-md h-[30.5rem]  overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCard />
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
                                    <TextField required id="address" name="address" label="Address" fullWidth autoComplete="given-name" multiline rows={4} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="city" name="city" label="City" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="state" name="state" label="state" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="zip" name="zip" label="Zip" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="phoneNumber" name="phoneNumber" label="PhoneNumber" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Button sx={{ py:1.5, mt: 2, bgcolor: "RBG(145 85 253)" }} size="large" variant="contained" type="submit">delever here</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>

                </Grid>

            </Grid>
        </div>
    )
}