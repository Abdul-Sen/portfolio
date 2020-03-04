import React, { Fragment, useState } from 'react';
import { Grid,  Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Info from './Info';
import ContactCard from './contactCard';


const styleHook = makeStyles(theme => ({
  container: {
    minHeight: "100vh",
    padding: "50px"
  },
}));


const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
  copyEmailStatus: false
}

function ContactContainer(props) {
  const useStyle = styleHook();

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


  return (
    <Fragment>
      <Container className={useStyle.container}>
        <Grid container justify="center" spacing={5} >
          <Grid item md={6}>
            <Info />
          </Grid>
          <Grid item md={6} >
            <ContactCard />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default ContactContainer;