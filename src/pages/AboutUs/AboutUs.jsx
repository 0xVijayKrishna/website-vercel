import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VyomastraLogo from '../../assets/vyomastra-logo.svg'
import Kamal from "../../assets/kamal.jpg"
import Aneesh from "../../assets/aneesh.jpg"
import Jesu from "../../assets/jesu.jpg"
import Shyam from "../../assets/shyam.jpg"
import JK from "../../assets/jk.png"
import Deva from "../../assets/deva.jpg"
import Kruti from "../../assets/kruti.jpg"
import Amisha from "../../assets/ami.jpg"



const AboutUs = () => {
    return (
        <Box sx={{color:'white', background:'linear-gradient(to right bottom, #111111, #333333)', height:{lg:'230vh', xs:'500vh', sm:'500vh'}}}>

            <Grid container rowSpacing={2} >
                <Grid item xs={12} lg={12} sx={{textAlign:'center', mt:{lg:10, xs:5}}}>
                        <Typography gutterBottom variant='h3' sx={{fontSize:{xs:48, lg:64}}}>
                            ABOUT US
                        </Typography>
                </Grid>

                <Grid item  xs={5} lg={5}>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', height:{xs:200, lg:300}}}>
                        <Box component='img' src={VyomastraLogo} alt='Vyomastra Logo' sx={{maxWidth:'80%'}}/>
                    </Box>
                </Grid>

                <Grid item  xs={7} lg={7}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:{xs:200, lg:300}, maxWidth:'100%', padding:2}} >
                        <Typography gutterBottom variant='subtitle1' component='a' sx={{fontSize:{lg:30, xs:13}}} >
                            Our approach entails designing, developing, and testing drones with uncompromising robustness.
                            Concurrently, we're fostering the growth of an indigenous Indian drone ecosystem,
                            uniting innovation and progress towards a soaring future.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={12} sx={{textAlign:'center', my:2}}>
                    <Typography gutterBottom variant='subtitle1' component='a' sx={{fontSize:{lg:38, xs:28}}} >
                        CO-PILOTS
                    </Typography>
                </Grid>

                <Grid item xs={12} lg={3} >
                    <Box sx={{display:'flex', justifyContent:'center', }}>
                        <Card sx={{ width:300, height:350}}>
                            <CardMedia
                                component="img"
                                alt="kamal"
                                height={"225"}
                                image={Kamal}
                                />
                            <CardContent sx={{textAlign:'center'}} >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Kamalakar Devaki
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center'}}>
                                <Link href="https://in.linkedin.com/in/kamalakardevaki" color="inherit">
                                    <LinkedInIcon sx={{width:48, height:48, color:'#0077B5'}} />
                                </Link>
                            </CardActions>
                        </Card>        
                    </Box>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Box sx={{display:'flex', justifyContent:'center', }}>
                        <Card sx={{ width: 300, height:350 }}>
                            <CardMedia
                                component="img"
                                alt="Aneesh"
                                height="225"
                                image={Aneesh}
                                />
                            <CardContent sx={{textAlign:'center'}} >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Aneesh D N
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center'}}>
                                <Link href="https://in.linkedin.com/in/aneesh-d-n-13130b18" color="inherit">
                                    <LinkedInIcon sx={{width:48, height:48, color:'#0077B5'}} />
                                </Link>
                            </CardActions>
                        </Card>        
                    </Box>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Box sx={{display:'flex', justifyContent:'center', }}>
                        <Card sx={{ width: 300, height:350 }}>
                            <CardMedia
                                component="img"
                                alt="Jesu"
                                height="225"
                                image={Jesu}
                                />
                            <CardContent sx={{textAlign:'center'}} >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Jesudas Fernandes
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center'}}>
                                <Link href="https://in.linkedin.com/in/jesudasfernandes" color="inherit">
                                    <LinkedInIcon sx={{width:48, height:48, color:'#0077B5'}} />
                                </Link>
                            </CardActions>
                        </Card>        
                    </Box>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Box sx={{display:'flex', justifyContent:'center', }}>
                        <Card sx={{ width: 300, height:350 }}>
                            <CardMedia
                                component="img"
                                alt="Shyam"
                                height="225"
                                image={Shyam}
                                />
                            <CardContent sx={{textAlign:'center'}} >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Shyam Sundar Dasari
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center'}}>
                                <Link href="https://in.linkedin.com/in/shyam-sundar-dasari-0710761a8" color="inherit">
                                    <LinkedInIcon sx={{width:48, height:48, color:'#0077B5'}} />
                                </Link>
                            </CardActions>
                        </Card>        
                    </Box>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Box sx={{display:'flex', justifyContent:'center', }}>
                        <Card sx={{ width: 300, height:350 }}>
                            <CardMedia
                                component="img"
                                alt="Deva"
                                height="225"
                                image={Deva}
                                />
                            <CardContent sx={{textAlign:'center'}} >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Devasis Pradhan 
                                </Typography>
                            </CardContent>
                            {/* <CardActions sx={{justifyContent:'center'}}>
                                <Link href="https://in.linkedin.com/in/devasis-pradhan-4474531a" color="inherit">
                                    <LinkedInIcon sx={{width:48, height:48, color:'#0077B5'}} />
                                </Link>
                            </CardActions> */}
                        </Card>        
                    </Box>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Box sx={{display:'flex', justifyContent:'center', }}>
                        <Card sx={{ width: 300, height:350 }}>
                            <CardMedia
                                component="img"
                                alt="Amisha"
                                height="225"
                                image={Amisha}
                                />
                            <CardContent sx={{textAlign:'center'}} >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Amisha Munvar
                                </Typography>
                            </CardContent>
                            {/* <CardActions sx={{justifyContent:'center'}}>
                                <Link href="https://in.linkedin.com/in/amisha-munvar-b45ba1b6" color="inherit">
                                    <LinkedInIcon sx={{width:48, height:48, color:'#0077B5'}} />
                                </Link>
                            </CardActions> */}
                        </Card>        
                    </Box>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Box sx={{display:'flex', justifyContent:'center', }}>
                        <Card sx={{ width: 300, height:350 }}>
                            <CardMedia
                                component="img"
                                alt="Kruti"
                                height="225"
                                image={Kruti}
                                />
                            <CardContent sx={{textAlign:'center'}} >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Kruthika K R
                                </Typography>
                            </CardContent>
                            {/* <CardActions sx={{justifyContent:'center'}}>
                                <Link href="https://at.linkedin.com/in/kruthika-k-r-6a375124/de" color="inherit">
                                    <LinkedInIcon sx={{width:48, height:48, color:'#0077B5'}} />
                                </Link>
                            </CardActions> */}
                        </Card>        
                    </Box>
                </Grid>

                <Grid item xs={12} lg={12} sx={{textAlign:'center', my:2}}>
                    <Typography gutterBottom variant='subtitle1' component='a' sx={{fontSize:{xs:28, lg:38}}} >
                        ADVISOR
                    </Typography>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Box sx={{display:'flex', justifyContent:'center', }}>
                        <Card sx={{ width: 300, height:350 }}>
                            <CardMedia
                                component="img"
                                alt="JKRao"
                                height="225"
                                image={JK}
                                />
                            <CardContent sx={{textAlign:'center'}} >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Brig J Kameswara Rao, VSM
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center'}}>
                                <Link href="https://in.linkedin.com/in/brig-j-kameswara-rao-vsm-b82307b" color="inherit">
                                    <LinkedInIcon sx={{width:48, height:48, color:'#0077B5'}} />
                                </Link>
                            </CardActions>
                        </Card>        
                    </Box>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <Box sx={{textAlign:{xs:'center', lg:'left'}, height:'100%', margin:'auto'}}>
                        <Typography variant='subtitle1' component='a' fontSize={{xs:12, lg:18}}>
                            <strong>Independent Director in Public Limited Company involved in Infrastructure development(RKEC).</strong> <br/> <br/>

                            <strong>Director, New Vision Realty </strong> <br/>
                            Company involved in Marketing of real estate ie facilitating selling and buying of flats, plots, <br/> agricultural land, commercial spaces as well as warehousing spaces. <br/> <br/>

                            <strong>Other Major Appointments</strong> <br/>
                            CEO, Real Estate Company(4000 cr Iconic Project) <br/>
                            Chief Engineer, Infrastructure Development for DRDO <br/>
                            Dy Chairman - 7 CPC(Army) <br/>
                            Member of Hyderabad Angels  <br/> <br/>

                            <strong>Nominated as Jury Member for selecting 100 Best Startups in the World for TIE Global Summit 2023</strong>
                        </Typography>
                    </Box>
                </Grid>
                            

            </Grid>

        </Box>
    )
}

export default AboutUs
