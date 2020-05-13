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
                    <Typography component={'span'} variant="h4" >
                        <Box fontWeight="fontWeightLight">
                            About me
                    </Box>
                    </Typography>
                </Grid>
                <Grid item md={11}>
                    <Typography component={'span'} variant="body1" gutterBottom>
                        <Box fontWeight={"300"}>
                            My name is Abdul Rehman, and I am a recent computer programming graduate from Seneca College with an interest in web technologies.I bring an energetic and communicative personality to the team and I love to learn, build and deliver.
              <br /><br />
                        Actively seeking a position where I can make meaningful contribution and grow as a developer. 
                        
            </Box>
                    </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Typography component={'span'} variant="h5" >
                        <Box fontWeight="fontWeightLight" paddingLeft="20px">
                            Contact
                    </Box>
                    </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Typography component={'span'} variant="body2" style={{ display: "flex", alignItems: "center" }}>
                        <PhoneIphoneIcon /> &ensp; +1 437-928-1996
          </Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography variant="body2" style={{ display: "flex", alignItems: "center" }}>
                        <RoomIcon /> &ensp; Toronto, ON Canada
          </Typography>
                </Grid>
                <Grid item md={12} sm={12}>
                    <Typography component={'span'} variant="body2" style={{ display: "flex", alignItems: "center" }}>
                        <MailOutlineIcon /> &ensp; abdul.rm.jahangir@gmail.com
          </Typography>
                </Grid>
                <Grid item md={12} sm={12}>
                    <Typography component={'span'} variant="h5" >
                        <Box fontWeight="fontWeightLight" paddingLeft="20px">
                            Online presence
                    </Box>
                    </Typography>
                </Grid>
                <Grid item md={4} sm={3} xs={12}>
                    <Box textAlign="center">
                        <Button size="large" style={{ textTransform: "lowercase" }} href="https://www.linkedin.com/in/abdul-r/" target="_blank">
                            <LinkedInIcon color="primary" fontSize="large"></LinkedInIcon> Catch me on linkedIn
                </Button>
                    </Box>
                </Grid>
                <Grid item md={4} sm={3} xs={12}>
                    <Box textAlign="center">
                        <Button size="large" style={{ textTransform: "lowercase" }} href="https://github.com/Abdul-Sen" target="_blank">
                            <GitHubIcon fontSize="large"></GitHubIcon>&nbsp; See how I code
                </Button>
                    </Box>
                </Grid>
                <Grid item md={4} sm={3} xs={12}>
                    <Box textAlign="center">
                        <Button size="large" style={{ textTransform: "lowercase" }} href="https://twitter.com/AbdulRe47817062" target="_blank">
                            <TwitterIcon fontSize="large" style={{ color: "#00acee" }}></TwitterIcon> &nbsp; Hear my thoughts
                </Button>
                    </Box>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Typography variant={"caption"} >
                    Illustration by <Box component={"a"} href={"https://ls.graphics/"} target="_blank"  > Ls Graphics </Box> ❤️
                    </Typography>
                </Grid>
            </Grid>
        </Fade>
    )
}

export default Info;