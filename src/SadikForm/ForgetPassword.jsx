import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate();
    return (
        <form>
        <Card sx={{width:"310px", bgcolor:"#FFFACD", boxShadow:"10px 10px #FAF0E6"}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>
                        Reset Password
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='outlined' type="email" label="Enter Email"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='outlined' type="text" label="Enter User Name"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='outlined' type="password" label="New Password"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='outlined' type="password" label="Confirm Password"/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' type='submit' color='secondary' >
                        Reset Password
                    </Button>
                </Grid>
                <Grid item xs={12}>
                <p>
                  <a style={{color:"blue"}} href= "" onClick={()=>navigate("/")}>Go to Login</a>
                </p>
              </Grid>
              </Grid>
            </CardContent>
        </Card>
        </form>
    );
};

export default ForgetPassword;