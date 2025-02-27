import { Alert } from "@mui/material";

export function PaymentSuccess(){
    return(
        <div className="flex justify-center items-center  h-72">
             <Alert severity="success">
                <div>Payment Success</div>.
                <div>Congratulation Your Order Get Placed</div>

             </Alert>
        </div>
    )
}