import { Card, CardContent, Grid } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Fetching1 = () => {
    const [data, setData] = useState([]);

    const fetching = async() => {
        const result = await axios.get("https://api.github.com/users/hacktivist123/repos");
        setData(result.data);
        console.log("AAA" , result.data);
    }
    useEffect(() => {
        fetching();
    });
    return (
        <div>
            {data.map((item) => {
                return(
                    <Grid item xs={4}>
                    <Card sx={{bgcolor: "lightgreen"}} style={{height:"1000px",width:"1000px",margin:"20px", marginTop:"50px" ,float:"left"}}>
                      <CardContent>
                        <h3 style={{color:"darkpink"}}>ID: {item.id}</h3>
                        <h4 style={{color:"red"}}>{item.node_id}</h4>
                        <h4 style={{color:"purple"}}>{item.name}</h4>
                        <h4 style={{color:"orange"}}>{item.full_name}</h4>
                        <h4 style={{color:"blue"}}>{item.private}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.login}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.id}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.node_id}</h4>
                        <a style={{color:"blue"}}>{item.owner.avatar_url}</a>
                        <h4 style={{color:"blue"}}>{item.owner.gravatar_id}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.html_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.followers_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.following_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.gists_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.starred_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.subscriptions_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.organizations_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.repos_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.events_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.received_events_url}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.type}</h4>
                        <h4 style={{color:"blue"}}>{item.owner.site_admin}</h4>
                        <h4 style={{color:"blue"}}>{item.html_url}</h4>
                        <h4 style={{color:"blue"}}>{item.description}</h4>
                      </CardContent>
                    </Card>
                  </Grid>
                )
            })}
        </div>
    );
};

export default Fetching1;