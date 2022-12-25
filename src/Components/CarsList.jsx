import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CarsList = () => {
    const [data, setData] = useState([]);
    const result = useSelector((state) => state.carsReducer.carsData)
    console.log(result);
    useEffect(() => {
       setData(result);
    }, []);
    return (
        <React.Fragment>
            <Grid container spacing={1}>
              {data.map((item) => {
                return(
                    <Grid item xs={4}>
                        <Card align="center" sx={{bgcolor: item.color, color: "aqua", height: 300}}>
                            <CardContent>
                                <Typography variant='h2'>
                                    {item.brand}
                                </Typography>
                                <Typography variant='h2'>
                                    {item.model}
                                </Typography>
                                <Typography variant='h2'>
                                    {item.manf}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
              })}
            </Grid>
        </React.Fragment>
    );
};

export default CarsList;