import { Grid } from "@mui/material";
import { OrderCard } from "./orderCard";

export function Order() {
    const orderStatus = [
        { lable: "On The Way", value: "on_the_way" },
        { lable: "Delivered", value: "delevered" },
        { lable: "Cancelled", value: "cancelled" },
        { lable: "Returned", value: "returned" },
    ]
    return (
        <div className="lg:px-20 px-5">
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid xs={2.5}>
                    <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
                        <p className="font-bold text-lg">Filter</p>
                        <div className="space-y-4 mt-10">
                            <h3 className="font-semibold">ORDER STATUS</h3>

                            {
                                orderStatus.map(option =>
                                    <div key={option.value} className="flex items-center">
                                        <input defaultValue={option.value} type="checkbox" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                        <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>{option.lable}</label>
                                    </div>)
                            }

                        </div>

                    </div>

                </Grid>
                <Grid item xs={9}>
                  <div className="space-y-5">
                  {[1,1,1,1,1,1].map(item=><OrderCard />)} 
                  </div>
                </Grid>
            </Grid>
        </div>
    )
}