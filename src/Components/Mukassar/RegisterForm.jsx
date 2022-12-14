import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useState} from 'react';
// import CentralLoginForm from "./CentralLoginForm";

const RegisterForm = () => {
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDob] = useState("");
    const [mail, setMail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [perm, setPerm] = useState("");
    const [password, setPassword] = useState("")
    const [conformPassword, setConformPassword] = useState("")
    const [data, setData] = useState([]);

    const handleAdd = () => {
        setData([...data, { fname, mname, lname, dob, mail, number, address, perm, state, country, password, conformPassword }])
    }
    const handleReset = () => {
        setFname("");
        setMname("");
        setLname("");
        setDob("");
        setMail("");
        setNumber("");
        setAddress("");
        setPerm("");
        setState("");
        setCountry("");
        setPassword("");
        setConformPassword("");
    }
    const handleSelectState = (Sadik) => {
        setState(Sadik.target.value);
    };
    const handleSelectCountry = (Sadik) => {
        setCountry(Sadik.target.value);
    };
    const hendleDelete = (ind) => {
        const filtered = data.filter((item, i) => i !== ind)
        setData(filtered);
    }
    return (
        <form action="" required>
        <React.Fragment>
        <Typography align="center" sx={{ color: "crimson", fontFamily: "monospace", fontStyle: "italic" }} variant="h2">Enter Your Details</Typography>
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent >
                        <TextField
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            required
                            fullWidth label="Enter First Name" />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <TextField
                            value={mname}
                            onChange={(e) => setMname(e.target.value)}
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            required
                            fullWidth label="Enter Middle Name" />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <TextField
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            required
                            fullWidth label="Enter Last Name" />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <TextField
                            type="date" id="start" 
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            fullWidth
                            required  />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <TextField
                            value={mail}
                            className='form-control'
                            onChange={(e) => setMail(e.target.value)}
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            required
                            type="email"
                            fullWidth label="Enter Email Id " 
                            />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <TextField
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            type="number"
                            fullWidth label="Enter Mobile Number"
                            required />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <TextField
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            required
                            fullWidth label="Enter Address " />
                    </CardContent>
                </Card>
            </Grid>
             <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <TextField
                            value={perm}
                            onChange={(e) => setPerm(e.target.value)}
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            required
                            fullWidth label="Enter Permanent Address " />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state}
                                label="State"
                                required
                                onChange={handleSelectState}
                                sx = {{ bgcolor: "lightyellow"}}
                            >
                                <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                                <MenuItem value={"Goa"}>Goa</MenuItem>
                                <MenuItem value={"Telangana"}>Telangana</MenuItem>
                                <MenuItem value={"Panjab"}>Panjab</MenuItem>
                                <MenuItem value={"Dilly"}>Delhi</MenuItem>
                                <MenuItem value={"West Bengol"}>West Bengol</MenuItem>
                                <MenuItem value={"Jammu Kasmir"}>Jammu Kasmir</MenuItem>
                                <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
                                <MenuItem value={"Tamilnadu"}>Tamilnadu</MenuItem>
                            </Select>
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={country}
                                label="Country"
                                required
                                onChange={handleSelectCountry}
                                sx = {{ bgcolor: "lightyellow"}}
                            >
                                <MenuItem value={"India"}>India</MenuItem>
                                <MenuItem value={"Shrilanka"}>Shrilanka</MenuItem>
                                <MenuItem value={"America"}>America</MenuItem>
                                <MenuItem value={"South Koria"}>South Koria</MenuItem>
                                <MenuItem value={"Austoliya"}>Austoliya</MenuItem>
                                <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
                                <MenuItem value={"Afganistan"}>Afganistan</MenuItem>
                                <MenuItem value={"Saudi Aribia"}>Saudi Aribia</MenuItem>
                                <MenuItem value={"Rasia"}>Rasia</MenuItem>
                            </Select>
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <TextField
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            type="password"
                            required
                            fullWidth label="Enter Password " />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ bgcolor: "green" }}>
                    <CardContent>
                        <TextField
                            value={conformPassword}
                            onChange={(e) => setConformPassword(e.target.value)}
                            type="password"
                            sx={{ bgcolor: "lightyellow" }}
                            variant="outlined"
                            required
                            fullWidth label="Enter Conform Password " />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
                <Button
                    onClick={handleAdd}
                    variant="contained"
                    fullWidth color="info">Submit</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={handleReset} type="reset" variant="contained" fullWidth color="secondary">Reset</Button>
            </Grid>
            <Grid item xs={3}></Grid>
            {
                data.map((item, ind) => {
                    return (
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <h5 style={{ color: "darkcyan", textAlign: "center"}}>{item.fname} {item.mname} {item.lname}</h5>
                                    <h6 style={{ color: "green" }}>Date Of Birth: {item.dob}</h6>
                                    <h6 style={{ color: "red" }}>Email Id: {item.mail}</h6>
                                    <h6 style={{ color: "blue" }}>Mobile No: {item.number}</h6>
                                    <h6 style={{ color: "chocolate" }}>Address: {item.address}</h6>
                                    <h6 style={{ color: "darkkhaki" }}>{item.perm}</h6>
                                    <h6 style={{ color: "purple" }}>State: {item.state}</h6>
                                    <h6 style={{ color: "brown" }}>Country: {item.country}</h6>
                                    <Button onClick={() => hendleDelete(ind) } variant="contained" color="warning">Delete</Button>
                                    {" "}
                                    <Button variant="contained" color="info">Edit</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    </React.Fragment>
    </form>
    );
};

export default RegisterForm;