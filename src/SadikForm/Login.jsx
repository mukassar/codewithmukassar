import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { validation } from "./Validation/LoginValidation";
  
  const Login = () => {
      const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
      username: "",
      password: "",
    });
    const handelChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
      console.log("AAA", e);
    };
    const handelSubmit = (e) => {
      e.preventDefault();
      validation(values);
      setErrors(validation(values));
    };
    return (
      <form onSubmit={handelSubmit}>
        <Card
          sx={{
            width: "310px",
            bgcolor: "#FFFACD",
            boxShadow: "10px 10px #FAF0E6",
          }}
        >
          <CardContent>
            <Typography variant="4">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4">Employee Login</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handelChange}
                    name="username"
                    variant="outlined"
                    type="text"
                    label="Enter User Name"
                  />
                  {errors && <p style={{ color: "red" }}>{errors.username}</p>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handelChange}
                    name="password"
                    variant="outlined"
                    type="password"
                    label="Enter User Password"
                  />
                  {errors && <p style={{ color: "red" }}>{errors.password}</p>}
                  <a style={{color:"blue"}} href="" onClick={() => navigate("/forget")}>Forget Password</a>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="success" type="submit">
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <p>
                    Don`t Have an Account? <a style={{color:"blue"}} href="" onClick={() => navigate("/register")}>Register Here</a>
                  </p>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </form>
    );
  };
  
  export default Login;
  