import { Button, Grid, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/Auth/Action";
import { useEffect } from "react";

export function RegisterForm() {

    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(jwt){
            
            dispatch(getUser())
        }
    },[jwt, auth.jwt, dispatch])

    

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget);

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }
       // dispatch(register)
       dispatch(register(userData));

        console.log("userData ", userData)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                        />

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="password"
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <Button className="bg-[#9155fd] w-full" type="submit" variant="contained" size="large" sx={{ padding: ".8rem 0", bgcolor: "#9155fd" }}>Register</Button>

                    </Grid>

                </Grid>

            </form>

            <div>
                <div className="py-3 flex justify-center" >
                    <p>If you have already account ?</p>
                    <Button onClick={() => navigate("/login")} className="ml-5" size="small">Login</Button>
                </div>
            </div>
        </div>
    )
}