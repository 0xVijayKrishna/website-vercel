import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BackgroundVideo from "../../assets/bg.mp4"

const LandingPage = () => {
    return (
        <Grid id="Home" container sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center' }}>
            <Grid item xs={12} lg={12} >
                <Card>
                    <CardMedia component="video" src={BackgroundVideo} autoPlay muted loop />

                </Card>
                

            </Grid>
                    
        </Grid>

    )
}

export default LandingPage