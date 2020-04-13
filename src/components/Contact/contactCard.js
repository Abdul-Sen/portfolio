import React, { Fragment, useState } from 'react';
import { Grid, Card, Container, CardContent, TextField, FormHelperText, FormControlLabel, Checkbox, Fab, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Info from './Info';
import Fade from 'react-reveal/Fade';
const INITIAL_STATE = {
    name: "",
    email: "",
    subject: "",
    message: "",
    copyEmailStatus: false
  }
  
const styleHook = makeStyles(theme => ({
    card: {
      maxWidth: 600,
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        backgroundColor: "#fbfbfb"
      },
      fab: {
        marginLeft: "auto",
      }
}));


function ContactCard(props)
{
  
    const [emailInfo, setEmailInfo] = useState(INITIAL_STATE);
  
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
  
      alert(`An email has been sent to Abdul Rehman`);
  
      console.log(emailInfo);
  
      const payload = Object.assign({}, emailInfo);
  
      (async () => {
        const rawResponse = await fetch('https://us-central1-microservices-264117.cloudfunctions.net/sendMessage', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
  
        console.log(rawResponse);//! important
  
      })(); //Execute immidiately
  
      setEmailInfo(INITIAL_STATE);
    }
  
  
    // # handeling state changes
    // ! for document purposes. We can choose to create individual functions to handle changes
    // const handleEmailChange = (val)=>{
    //   setEmailInfo((previousState) => ({ ...previousState, email: val }));
    // }
  
  
    const handleChange = e => {
  
      //? This 'if' only exists because i was too dumb to figure out best way to support the checkbox =/
      const temp = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      if (e.target.type === "checkbox") {
        console.log("event is a checkbox")
        setEmailInfo((previousState) => ({ ...previousState, copyEmailStatus: temp }));
      }
      else {
        const { name, value } = e.target;
        setEmailInfo((previousState) => ({ ...previousState, [name]: value }));
  
      }
  
    }

    const useStyle = styleHook();

    return(
        <Fade right cascade>
        <Card className={useStyle.card}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} >
                <Grid item sm={12} xs={12} md={12}>
                  <Typography component={'span'} variant="h4" gutterBottom>
                    <Box fontWeight="fontWeightLight" >
                      Don't be a lurker, get in touch!
                      </Box>
                  </Typography>
                  <hr></hr>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField value={emailInfo.name} fullWidth id="name-input" aria-describedby="name-helper-text" name="name" label="Name" onChange={handleChange} />
                  <FormHelperText id="name-helper-text">Your name (Optional)</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField fullWidth id="email-input" aria-describedby="email-helper-text" name="email" label="Email" value={emailInfo.email} onChange={handleChange} />
                  <FormHelperText id="email-helper-text">Your email (Optional)</FormHelperText>

                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField value={emailInfo.subject} id="subject-input" variant="outlined" aria-describedby="my-helper-text" name="subject" fullWidth label="Subject" onChange={handleChange} />
                  <FormHelperText id="subject-helper-text">Email Subject (Required)</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField value={emailInfo.message} id="message-input" rows="15" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="message" onChange={handleChange} />
                  <FormHelperText id="message-helper-text">Required.</FormHelperText>

                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" name="copyEmailStatus" checked={emailInfo.copyEmailStatus} disabled onChange={handleChange} value="yes" />}
                    label="Send me a copy of the email (Temp disabled)"
                  />
                </Grid>
                <Grid item className={useStyle.fab} md={4}>
                  <Fab variant="extended" size="large" color="primary" type="submit" value="submit">
                    send message
                    <ArrowForwardIosIcon fontSize="small" />
                  </Fab>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        </Fade>
    )
}

export default ContactCard;