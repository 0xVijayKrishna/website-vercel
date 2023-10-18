import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import QGC from "../../assets/gcs.svg"
import AI from "../../assets/ai.svg"
import RealTime from "../../assets/real-time.svg"
import RemoteControl from "../../assets/rem-control.svg"
import RemoteDiag from "../../assets/rem-diag.svg"
import MissonPlanning from "../../assets/mission-planning.svg"
import Geonfence from "../../assets/geofence.svg"


const Software = () => {
    return (
        <Box id="Software" sx={{color:'white', height:{lg:'100vh', xs:'108vh', sm:'90vh'}, display:'flex', flexDirection:'column'}}>
        
            <Grid container>
                
                <Grid item xs={12} lg={12}>
                    <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:{lg:12}}}>
                        <Typography variant='h3' sx={{fontSize:{xs:48, lg:64}}}>
                            Drone Beyond
                        </Typography>
                    </Box>

                </Grid>
                
                <Grid item xs={12} lg={12} sx={{display:'flex', justifyContent:'center'}}>
                    <Box sx={{width:'80%', display:'flex', justifyContent:'center', textAlign:'center', padding:2}}>
                        <Typography variant='h6'>
                        <strong>Drone Beyond</strong> is built to plan and command both mapping and surveillance missions, with the ability to pre-plan missions based on operational area and target locations via waypoint-based navigation.
                        </Typography>
                    </Box>
                </Grid>
                
                <Box sx={{width:'100%', height:50, display:{xs:'none', lg:'block'}}} />

                <Grid item xs={12} lg={6} >
                    <Grid container >
                        <Grid item xs={4} lg={4}>
                            <Box component='div'
                                sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    alignItems:'center',
                                    width:{xs:'150px', lg:'200px'},
                                    height:{xs:'100px', lg:'150px'},
                                    mt:{xs:5, lg:10}
                                    
                                    }}
                                >
                                    <Box component='img' src={AI} alt={AI} sx={{maxWidth:'50%'}} />
                                    <Typography variant='subtitle1' sx={{textAlign:'center', padding:1, fontSize:{xs:'10px', lg:'15px'}}}>
                                        AI Integration
                                    </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={4} lg={4}>
                            <Box component='div'
                                sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    alignItems:'center',
                                    width:{xs:'150px', lg:'200px'},
                                    height:'100px',
                                    mt:{xs:5, lg:10}
                                    }}
                                >
                                    <Box component='img' src={RealTime} alt={RealTime} sx={{maxWidth:'50%'}} />
                                    <Typography variant='subtitle1' sx={{textAlign:'center', padding:1, fontSize:{xs:'10px', lg:'15px'}}}>
                                        Real Time Streaming
                                    </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={4} lg={4}>
                            <Box component='div'
                                sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    alignItems:'center',
                                    width:{xs:'150px', lg:'200px'},
                                    height:{xs:'100px', lg:'150px'},
                                    mt:{xs:5, lg:10}
                                    }}
                                >
                                    <Box component='img' src={MissonPlanning} alt={MissonPlanning} sx={{maxWidth:'50%'}} />
                                    <Typography variant='subtitle1' sx={{textAlign:'center', padding:1, fontSize:{xs:'10px', lg:'15px'}}}>
                                        Misson Planning
                                    </Typography>
                            </Box>
                        </Grid>

                        <Grid item  xs={4} lg={4}>
                            <Box component='div'
                                sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    alignItems:'center',
                                    width:{xs:'150px', lg:'200px'},
                                    height:{xs:'100px', lg:'150px'},
                                    mt:5
                                    }}
                                >
                                    <Box component='img' src={RemoteControl} alt={RemoteControl} sx={{maxWidth:'50%'}} />
                                    <Typography variant='subtitle1' sx={{textAlign:'center', padding:1, fontSize:{xs:'10px', lg:'15px'}}}>
                                        Remote Control
                                    </Typography>
                            </Box>
                        </Grid>

                        <Grid item  xs={4} lg={4}>
                            <Box component='div'
                                sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    alignItems:'center',
                                    width:{xs:'150px', lg:'200px'},
                                    height:{xs:'100px', lg:'150px'},
                                    mt:5
                                    }}
                                >
                                    <Box component='img' src={Geonfence} alt={Geonfence} sx={{maxWidth:'50%'}} />
                                    <Typography variant='subtitle1' sx={{textAlign:'center', padding:1, fontSize:{xs:'10px', lg:'15px'}}}>
                                        Geofence & Saftey Measures
                                    </Typography>
                            </Box>
                        </Grid>

                        <Grid item  xs={4} lg={4}>
                            <Box component='div'
                                sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    alignItems:'center',
                                    width:{xs:'150px', lg:'200px'},
                                    height:{xs:'100px', lg:'150px'},
                                    mt:5
                                    }}
                                >
                                    <Box component='img' src={RemoteDiag} alt={RemoteDiag} sx={{maxWidth:'50%'}} />
                                    <Typography variant='subtitle1' sx={{textAlign:'center', padding:1, fontSize:{xs:'10px', lg:'15px'}}}>
                                        Remote Diagnostics
                                    </Typography>
                            </Box>
                        </Grid>

                    </Grid>
                </Grid>
                
                <Box sx={{width:'100%', height:25, display:{xs:'block', sm:'block', lg:'none'}}} />

                <Grid item  xs={12} lg={6} >
                    <Box sx={{display:'flex', justifyContent:'center' }}>
                        <Box component='img' src={QGC} sx={{maxWidth:'100%', padding:1}} />
                    </Box>
                </Grid>
            </Grid>
        </Box>


    )
}

export default Software