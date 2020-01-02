import React, { Fragment, useState } from 'react';
import { Grid, Card, Container, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { useForm } from 'react-hook-form';

const styleHook = makeStyles(theme => ({
  container: {
    minHeight: "80vh"
  }
}));


function Contact(props) {
  const useStyle = styleHook();

  const [emailInfo, setEmailInfo] = useState({ name: "", email: "", subject: "", message: "" });
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);

}

  return (
    <Fragment>
      <Container className={useStyle.container}>

        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Card>
              <CardContent>
                <h1>Get in touch</h1>
                <h4>Want to get in touch? Leave a message and I'll be sure to reach back asap. Or you can reach me out on my phone/email</h4>
                <form onSubmit={handleSubmit}>
                  <label>
                    Frirst Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />

                  </label>
                  <input type="submit" value="Submit" />
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