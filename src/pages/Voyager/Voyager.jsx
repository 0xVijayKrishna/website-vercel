import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Voy from "../../assets/voyager-v.svg"
import VoyFeat from "../../assets/voyager-features.svg"
import ReactPlayer from 'react-player'

const boxStyleRight = {
    width:{lg:'300px', sm:'150px'}, 
    height:{lg:'200px', sm:'100px'}, 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'right',
    textAlign:'right',
    fontStyle:'italic',
}

const boxStyleLeft = {
    width:{lg:'300px', sm:'150px'}, 
    height:{lg:'200px', sm:'100px'}, 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'left',
    textAlign:'left',
    fontStyle:'italic',
}

const responsiveFontSize = {
    color:'white',
    fontSize:{xs:12, lg:22},
}

const Bhoomi = () =>{
    return(
        <Box sx={{background:'linear-gradient(#111111, #333333, #111111)'}}>

            <Grid container>

                <Grid item lg={12} xs={12} >
                    <Box sx={{zIndex:1000, color:'#FA0202', display:'flex', alignItems:'center', justifyContent:'center', my:5}}>
                        <Typography gutterBottom variant='h3' sx={{fontSize:{lg:72, xs:36}}}>
                            VOYAGER - 5G
                        </Typography>
                    </Box>
                    <Box sx={{zIndex:1000, color:'white', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', my:5}}>
                        <Typography variant='h6' gutterBottom sx={responsiveFontSize}>
                            Elevate your perspective with lightning-fast 5G connectivity and unparalleled aerial precision. <br/>  Discover a new dimension of exploration
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex', justifyContent:'center'}}>

                        <Box  component='img' src={Voy} alt='Voyager-5' sx={{width:'60%'}} />
                    </Box>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <Box sx={{width:"100%", height:{lg:600, xs:400}, padding:5}}>
                        <ReactPlayer url='https://youtu.be/JPKu0YIiR6U' width='100%' height='100%'/>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={6} sx={{textAlign:'center'}}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:{xs:100, lg:'100%'}, mb:{lg:10}, padding:5}}>
                        <Typography variant='h6' gutterBottom sx={responsiveFontSize}> 
                            Meticulously designed and rigorously tested in India to ensure uncompromised quality and performance. Designed, assembled, tested, and supported by the Vyomastra team at our headquarters.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={12} >
                <Box sx={{width:"100%", height:50}}/>
                    <Box sx={{display:'flex', justifyContent:'space-evenly'}}>

                        <Box component='div' sx={{display:'flex', flexDirection:'column', rowGap:5 }}>
                            <Box sx={boxStyleRight}>
                                <Typography variant='h6' sx={responsiveFontSize} >
                                    GLOBAL CONNECTIVITY
                                </Typography>
                            </Box>
                            <Box  sx={boxStyleRight}>
                                <Typography variant='h6' sx={responsiveFontSize}>
                                FULLY AUTONOMOUS
                                </Typography>
                            </Box>
                            <Box  sx={boxStyleRight}>
                                <Typography variant='h6' sx={responsiveFontSize}>
                                    OBSTACLE AVOIDANCE SYSTEM
                                </Typography>
                            </Box>
                        </Box>
                        
                        <Box component='img' src={VoyFeat} alt='VoyFeat' sx={{width:'63%'}} />
                            
                        <Box component='div' sx={{display:'flex', flexDirection:'column', rowGap:5 }}>
                        <Box  sx={boxStyleLeft}>
                                <Typography variant='h6' sx={responsiveFontSize}>
                                    30 MINUTES FLIGHT TIME
                                </Typography>
                            </Box>
                            <Box sx={boxStyleLeft}>
                                <Typography variant='h6' sx={responsiveFontSize}>
                                    PAYLOAD UPTO 2KG
                                </Typography>
                            </Box>
                            <Box sx={boxStyleLeft}>
                                <Typography variant='h6' sx={responsiveFontSize}>
                                    REAL-TIME STREAMING
                                </Typography>
                            </Box>
                        </Box>

                    </Box>

                </Grid>

                

               
            </Grid>

            <Box sx={{width:"100%", height:100}}/>
        </Box>

    )
}

export default Bhoomi