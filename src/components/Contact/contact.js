import React, { Fragment, useState } from 'react';
import { Grid, Card, Container, CardContent, TextField, FormControl, InputLabel, Input, FormHelperText, FormControlLabel, Checkbox, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const styleHook = makeStyles(theme => ({
  card: {
    boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
    transform: "scale(0.91)",
    margin: "10px"
  },
  container: {
    minHeight: "80vh",
    // backgroundColor: "#f3eff9",
    // backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='32' viewBox='0 0 48 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dfd0f7' fill-opacity='0.4'%3E%3Cpath d='M27 32c0-3.314 2.686-6 6-6 5.523 0 10-4.477 10-10S38.523 6 33 6c-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 6.627 0 12 5.373 12 12s-5.373 12-12 12c-2.21 0-4 1.79-4 4h-2zm-6 0c0-3.314-2.686-6-6-6-5.523 0-10-4.477-10-10S9.477 6 15 6c3.314 0 6-2.686 6-6h-2c0 2.21-1.79 4-4 4C8.373 4 3 9.373 3 16s5.373 12 12 12c2.21 0 4 1.79 4 4h2z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  },
  fab: {
    marginLeft: "auto",
  },

}));

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
  copyEmailStatus: false
}

function Contact(props) {
  const useStyle = styleHook();

  const [emailInfo, setEmailInfo] = useState(INITIAL_STATE);


  const handleSubmit = (evt) => {
    evt.preventDefault();

    alert(`An email has been sent to Abdul Rehman`);

    console.log(emailInfo);
    
    const payload = Object.assign({},emailInfo);

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


  return (
    <Fragment>
      <Container className={useStyle.container}>

        <Grid container justify="center" spacing={2}>
          <Grid item md={12}>
          </Grid>
          <Grid item md={8} >
            <Card className={useStyle.card}>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3} >
                    <Grid item sm={12} xs={12} md={12}>
                      <h1>Don't be a lurker, get in touch!</h1>
                      <hr></hr>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <TextField value={emailInfo.name} fullWidth id="name-input" aria-describedby="name-helper-text" name="name" label="Name" onChange={handleChange} />
                      <FormHelperText id="name-helper-text">Your name (Optional)</FormHelperText>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
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
                    <Grid item className={useStyle.fab} md={3}>
                      <Fab variant="extended" size="medium" color="primary" type="submit" value="submit">
                        Navigate
                        <ArrowForwardIosIcon fontSize="small" />
                      </Fab>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default Contact;