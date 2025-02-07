import { Step, StepLabel, Stepper } from "@mui/material";
import PropTypes from "prop-types";


export function OrderTracker({ activeStep }) {
    const steps = [
        "Placed",
        "Order Confirm",
        "Shipped",
        "Out For Delivery",
        "Delivered"
    ]
    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => <Step>
                    <StepLabel sx={{ color: "#9155fd", fontSize: "44px" }}>{label}</StepLabel>
                </Step>)}

            </Stepper>

        </div>
    )
}
OrderTracker.propTypes = {
    activeStep: PropTypes.number.isRequired,
}
