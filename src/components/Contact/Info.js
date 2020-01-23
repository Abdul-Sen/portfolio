import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';

const Info = (props) => {
    return (
        <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item md={12}>
                <Typography variant="h4" >
                    <Box fontWeight="fontWeightLight">
                        About me
                    </Box>
                </Typography>
            </Grid>
            <Grid item md={11}>
                <Typography variant="body1" gutterBottom>
                    <Box>
                        My name is Abdul Rehman, and I am a final semester computer programming student at Seneca College. I am actively searching for a place to work where I can learn and grow as a developer.
              <br /><br />
                        I bring with myself an energetic personality and a love of learning and building modern web applications.
            </Box>
                </Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="body2" style={{ display: "flex", alignItems: "center" }}>
                    <PhoneIphoneIcon /> &ensp; +1 437-928-1996
          </Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="body2" style={{ display: "flex", alignItems: "center" }}>
                    <MailOutlineIcon /> &ensp; abdul-rehman@myseneca.ca
          </Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="body2" style={{ display: "flex", alignItems: "center" }}>
                    <RoomIcon /> &ensp; 40 Guildcrest Dr, Scarborough, ON M1E 1E4
          </Typography>
            </Grid>
        </Grid>
    )
}

export default Info;