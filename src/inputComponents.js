import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import {Box} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function InputComponents() {

const [cityNames, setCityNames] = useState("");

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow:1
  },

  title:{
    display:'none',
    [theme.breakpoints.up('sm')]:{
      display:'block',
    },
  },
  sectionDesktop:{
    display:'none',
    [theme.breakpoints.up('md')]:{
      display:'flex',
    },
  },
}));

const classes = useStyles();

  return (
    <div className="App">
    <div className = {classes.grow}>
    <AppBar postion="relative">
    <Toolbar>

      <Typography className = {classes.title} variant = "h5" nowrap>
        Where did you go?
      </Typography>
    </Toolbar>
    </AppBar>
    </div>
    <div style={{marginTop: "90px"}}>
    <Box>
        <MDBContainer>
        <MDBRow></MDBRow>
          <MDBRow>
          <MDBCol></MDBCol>
            <MDBCol md = "6">
              <form>
                <p className="text-center mb-4">Your map will open in a new tab. Right Click and save as html.</p>
                <div className="grey-text">

                  <MDBInput label="City Names" group type="text" value = {cityNames} onChange={e => setCityNames(e.target.value)} />
                  <p className="text-center mb-4">Seperate the city names with comma</p>
                  <MDBInput label="Dates (not implemented)" group type="text" />
                  <p className="text-center mb-4">Seperate the dates with comma</p>

                </div>
                <div className="text-center">
                  <MDBBtn outline color="blue" onClick = {async () => {
                    const city = {cityNames};
                    const response = await fetch('/getCity', {
                      method: 'POST',
                      headers:{
                        'Content-Type':'application/json'
                      },
                      body: JSON.stringify(city)
                    })

                      if (response.ok){
                        console.log(response);
                        console.log("response");
                        window.open("map.html", "_blank");
                      }
                  }}>
                    Submit
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </MDBContainer>
        </Box>
        </div>
      </div>

  );
}

export default InputComponents;
