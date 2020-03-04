import React from 'react'
import { Grid, Typography, Box, Button } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Fade from 'react-reveal/Fade';

const Info = (props) => {
    return (
        <Fade left>
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
            <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h5" >
                    <Box fontWeight="fontWeightLight" paddingLeft="20px">
                        Contact
                    </Box>
                </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <Typography variant="body2" style={{ display: "flex", alignItems: "center" }}>
                    <PhoneIphoneIcon /> &ensp; +1 437-928-1996
          </Typography>
            </Grid>
            <Grid item md={12} sm={12}>
                <Typography variant="body2" style={{ display: "flex", alignItems: "center" }}>
                    <MailOutlineIcon /> &ensp; abdul-rehman@myseneca.ca
          </Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="body2" style={{ display: "flex", alignItems: "center" }}>
                    <RoomIcon /> &ensp; 40 Guildcrest Dr, Scarborough, ON M1E 1E4
          </Typography>
            </Grid>
            <Grid item md={12} sm={12}>
            <Typography variant="h5" >
                    <Box fontWeight="fontWeightLight" paddingLeft="20px">
                        Online presence
                    </Box>
                </Typography>
            </Grid>
            <Grid item md={4} sm={3} xs={12}>
                <Box textAlign="center">
                <Button size="large" style={{textTransform:"lowercase"}} href="https://www.linkedin.com/in/abdul-r/" target="_blank">
                    <LinkedInIcon color="primary" fontSize="large"></LinkedInIcon> Catch me on linkedIn
                </Button>
                </Box>
            </Grid>
            <Grid item md={4} sm={3} xs={12}>
                <Box textAlign="center">
                <Button size="large" style={{textTransform:"lowercase"}} href="https://github.com/Abdul-Sen" target="_blank">
                     <GitHubIcon fontSize="large"></GitHubIcon>&nbsp; See how I code
                </Button>
                </Box>
            </Grid>
            <Grid item md={4} sm={3} xs={12}>
                <Box textAlign="center">
                <Button size="large" style={{textTransform:"lowercase"}} href="https://twitter.com/AbdulRe47817062" target="_blank">
                    <TwitterIcon fontSize="large" style={{color:"#00acee"}}></TwitterIcon> &nbsp; Hear my thoughts
                </Button>
                </Box>
            </Grid>
        </Grid>
        </Fade>
    )
}

export default Info;