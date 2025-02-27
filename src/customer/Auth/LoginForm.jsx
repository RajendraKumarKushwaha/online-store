import { Button, Grid, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../State/Auth/Action";
import { useEffect } from "react";

export function LoginForm(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store)

    useEffect(()=>{
            if(jwt){
                
                dispatch(getUser())
            }
        },[jwt, auth.jwt])
    

    const handleSubmit=(e)=>{
        e.preventDefault()

        const data = new FormData(e.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }

        dispatch(login(userData))
        console.log("userData ", userData)

    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
               
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
                    <Button className="bg-[#9155fd] w-full" type="submit" variant="contained" size="large" sx={{padding:".8rem 0", bgcolor:"#9155fd"}}>Login</Button>

                </Grid>

            </Grid>

           </form>

           <div>
                <div className="py-3 flex justify-center" >
                    <p>If you dont have account ?</p>
                    <Button onClick={() => navigate("/register")} className="ml-5" size="small">Register</Button>
                </div>
            </div>
        </div>
    )
}