import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useFormik } from "formik";
  import { Registerschema } from "./Validation/YupValidation";
  import { useNavigate } from "react-router-dom";
  
  const Registration = () => {
      const navigate = useNavigate();
    const initialValues = {
      name: "",
      email: "",
      number: "",
      username: "",
      password: "",
      confirmpassword: "",
    };
  
    const { values, handelSubmit, errors, handleChange } = useFormik({
      initialValues: initialValues,
      validationSchema: Registerschema,
      onSubmit: (values) => {
          console.log("SSS", values);
      },
    });
    console.log("PPP", errors);
  
    return (
      <form onSubmit={handelSubmit}>
        <Card
          sx={{
            width: "400px",
            bgcolor: "#FFFACD",
            boxShadow: "10px 10px #FAF0E6",
          }}
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4">Employee Registration</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.name}
                  name="name"
                  variant="outlined"
                  type="text"
                  label="Enter Name"
                  onChange={handleChange}
                />
                {<p>{errors.name}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.email}
                  name="email"
                  variant="outlined"
                  type="email"
                  label="Enter Email"
                  onChange={handleChange}
                />
                {<p>{errors.email}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.number}
                  name="number"
                  variant="outlined"
                  type="phone"
                  label="Enter Number"
                  onChange={handleChange}
                />
                {<p>{errors.number}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.username}
                  name="username"
                  variant="outlined"
                  type="text"
                  label="Enter User Name"
                  onChange={handleChange}
                />
                {<p>{errors.username}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.password}
                  name="password"
                  variant="outlined"
                  type="password"
                  label="Enter Password"
                  onChange={handleChange}
                />
                {<p>{errors.password}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.confirmpassword}
                  name="confirmpassword"
                  variant="outlined"
                  type="password"
                  label="Confirm Password"
                  onChange={handleChange}
                />
                {<p>{errors.confirmpassword}</p>}
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" color="primary">
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p>
                  Already Have An Account? <a style={{color:"blue"}} href= "" onClick={()=>navigate("/")}>Go to Login</a>
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    );
  };
  
  export default Registration;
  