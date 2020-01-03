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
    minHeight: "80vh"
  },
  fab: {
    marginLeft: "auto",
  },

}));


function Contact(props) {
  const useStyle = styleHook();

  const [emailInfo, setEmailInfo] = useState({ name: "", email: "test", subject: "", message: "", copyEmailStatus: false });


  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`email sent to Abdul Rehman from ${emailInfo.name}, check console for logs`);
    console.log(emailInfo);
  }

  // # handeling state changes

  // ! for document purposes. We can choose to create individual functions to handle changes
  // const handleEmailChange = (val)=>{
  //   setEmailInfo((previousState) => ({ ...previousState, email: val }));
  // }


  const handleChange = e => {
    console.log(e.target);

    //? This 'if' only exists because i was too dumb to figure out best way to support the checkbox =/
    const temp = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    if(e.target.type === "checkbox")
    {
      console.log("event is a checkbox")
      setEmailInfo((previousState) => ({ ...previousState, copyEmailStatus: temp }));
    }
    else{
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
                      <TextField fullWidth id="name-input" aria-describedby="name-helper-text" name="name" label="Name" onChange={handleChange} />
                      <FormHelperText id="name-helper-text">Your name (Optional)</FormHelperText>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <TextField fullWidth id="email-input" aria-describedby="email-helper-text" name="email" label="Email" onChange={handleChange} />
                      <FormHelperText id="email-helper-text">Your email (Optional)</FormHelperText>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField id="subject-input" variant="outlined" aria-describedby="my-helper-text" name="subject" fullWidth label="Subject" onChange={handleChange} />
                      <FormHelperText id="subject-helper-text">Email Subject (Required)</FormHelperText>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField id="message-input" rows="15" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="message" onChange={handleChange} />
                      <FormHelperText id="message-helper-text">Required.</FormHelperText>

                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox color="primary" name="copyEmailStatus" checked={emailInfo.copyEmailStatus} onChange={handleChange} value="yes" />}
                        label="Send me a copy of the email"
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