import { Avatar, Box, Grid2, Rating } from "@mui/material";

export function ProductReviewCard(){
    return(
        <div>
            <Grid2 container spacing={2} gap={3}>
                <Grid2 item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}}>R </Avatar>
                    </Box>
                </Grid2>
                <Grid2 item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p className="text-lg font-semibold">Ram</p>
                            <p className="opacity-70">May 5, 2024</p>
                        </div>

                    </div>
                    <Rating value={4.5} name="half-rating" readOnly precision={0.5}/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, omnis.</p>

                </Grid2>
                       



            </Grid2>
        </div>
    )
}