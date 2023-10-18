import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BF from "../../assets/bhoomi-features.svg"
import B from "../../assets/bhoomi-ppk.svg"
import Sample from "../../assets/sample.svg"

const boxStyleRight = {
    width:{lg:'300px', sm:'150px'}, 
    height:{lg:'200px', sm:'100px'}, 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'right',
    textAlign:'center',
    fontStyle:'italic',
}

const boxStyleLeft = {
    width:{lg:'300px', sm:'150px'}, 
    height:{lg:'200px', sm:'100px'}, 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'left',
    textAlign:'center',
    fontStyle:'italic',
}

const responsiveFontSize = {
    fontSize:{xs:12, lg:22},
}

const boxResponsiveFontSize = {
    fontSize:{xs:8, lg:22},
}



const Bhoomi = () =>{
    return(
        
        <Box sx={{background:'linear-gradient(#111111, #333333, #111111)'}}>
            <Grid container>
                <Grid item lg={12} >
                    <Box sx={{zIndex:1000, color:'#FA7E02', display:'flex', alignItems:'center', justifyContent:'center', mt:5}}>
                        <Typography gutterBottom variant='h3' sx={{fontSize:{lg:72, xs:36}}}>
                            BHOOMI - PPK
                        </Typography>
                    </Box>
                    
                    <Box sx={{zIndex:1000, color:'white', display:'flex', alignItems:'center', justifyContent:'center', mt:5, textAlign:'center'}}>

                        <Typography variant='h6' gutterBottom sx={responsiveFontSize}>
                            Our innovative large-coverage survey drone combines extended flight endurance, adnvanced imaging, and intelligent <br/> mapping for efficient are-wide data collection
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Box component='img' src={B} alt='bhoomi-ppk' sx={{width:'60%'}} />
                    </Box>
                    
                </Grid>

                <Grid item lg={12} >
                    <Box sx={{zIndex:1500, color:'white', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', mt:5}}>
                        <Typography variant='h6' gutterBottom sx={responsiveFontSize}>
                           Sample output images captured by Bhoomi UAV. It can survey up to 200 acres in a single flight
                        </Typography>
                    </Box>
                    
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Box component='img' src={Sample} alt='sample-output' sx={{maxWidth:'75%'}} />
                    </Box>
                    
                </Grid>


                <Grid item lg={12} sx={{color:'white'}}>
                    <Box sx={{display:'flex', justifyContent:'space-evenly'}}>

                        <Box component='div' sx={{display:'flex', flexDirection:'column', rowGap:5 }}>
                            <Box sx={boxStyleRight}>
                                <Typography variant='h6' sx={boxResponsiveFontSize}>
                                    PPK/RTK COMPATIBLE
                                </Typography>
                            </Box>
                            <Box sx={boxStyleRight}>
                                <Typography variant='h6' sx={boxResponsiveFontSize}>
                                    LARGE AREA COVERAGE
                                </Typography>
                            </Box>
                            <Box sx={boxStyleRight}>
                                <Typography variant='h6' sx={boxResponsiveFontSize}>
                                    OBSTACLE AVOIDANCE SYSTEM
                                </Typography>
                            </Box>
                        </Box>
                        
                        <Box component='img' src={BF} alt='BF' sx={{maxWidth:'60%'}} />
                            
                        <Box component='div' sx={{display:'flex', flexDirection:'column', rowGap:5 }}>
                        <Box sx={boxStyleLeft}>
                                <Typography variant='h6' sx={boxResponsiveFontSize}>
                                    40 MINUTES OF FLIGHT TIME
                                </Typography>
                            </Box>
                            <Box sx={boxStyleLeft}>
                                <Typography variant='h6' sx={boxResponsiveFontSize}>
                                    FULLY AUTONOMOUS
                                </Typography>
                            </Box>
                            <Box sx={boxStyleLeft}>
                                <Typography variant='h6' sx={boxResponsiveFontSize}>
                                    HIGH RESOLUTION CAMERA
                                </Typography>
                            </Box>
                        </Box>

                    </Box>

                </Grid>
            </Grid>

            <Box sx={{width:"100%", height:60}}/>
        </Box>

    )
}

export default Bhoomi