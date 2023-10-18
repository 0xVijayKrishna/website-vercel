import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Catalyst from "../../assets/catalyst.svg"
import TataCom from "../../assets/tata-com.svg"
import Ktech from "../../assets/ktech.svg"
import Nasscom from "../../assets/nascom.svg"


const TrustedBy = () => {
    return(
        <Box sx={{height:{sm:"120vh", md:'100vh', lg:'50vh'} }}>
             <Box component='div' sx={{
                width:'100%',
                height:50,
            }}>

            </Box>
            <Box sx={{
                width:'100%',
                display:'flex',
                justifyContent:"center"
            }}>
                <Typography variant='h3' sx={{fontSize:{xs:48, lg:64}}}>
                    TRUSTED BY
                </Typography>

            </Box>

            <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={3}  >
                    <Box component='img' src={TataCom} alt={TataCom} sx={{width:'80%', height:'80%'}} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3}  >
                    <Box component='img' src={Catalyst} alt={Catalyst} sx={{width:'80%', height:'80%'}} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3}  >
                    <Box component='img' src={Ktech} alt={Ktech} sx={{width:'80%', height:'80%'}} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3}  >
                    <Box component='img' src={Nasscom} alt={Nasscom} sx={{width:'80%', height:'80%'}} />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3}  >
                    <Box sx={{width:'100%', height:25, display:{xs:'block', sm:'block', lg:'none'}}} />
                </Grid>
            </Grid>


       


        
           
        </Box>
    )

}

export default TrustedBy