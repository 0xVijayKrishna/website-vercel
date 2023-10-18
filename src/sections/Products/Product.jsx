import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Voyager from "../../assets/voyager.svg"
import Bhoomi from "../../assets/bhoomi.svg"

const cardStyleVoyager = {
    display:'flex', 
    flexGrow:1, 
    maxWidth:{xs:300, sm:350, md:450}, 
    height:{xs:250, sm:350, md:450},
    color:'white', 
    background:'#222222' , 
    borderRadius:5, 
    boxShadow:"0 0 25px black",
    ":hover": {boxShadow:"0 0 30px #FA0202"},
}

const cardStyleBhoomi = {
    display:'flex', 
    flexGrow:1, 
    maxWidth:{xs:300, sm:350, md:450}, 
    height:{xs:250, sm:350, md:450}, 
    color:'white', 
    background:'#222222', 
    borderRadius:5, 
    boxShadow:"0 0 25px black", 
    ":hover": {boxShadow:"0 0 25px #FA7E02"},
}

const cardMediaStyle= {
    height: {xs:200, sm:300, md:400}
}


const Product = () => {
    return (
        <Box sx={{color:'white', height:{xs:'105vh', lg:'100vh'}}}>
            <Grid id="Products" container>

                <Grid item xs={12} lg={12} sx={{textAlign:'center'}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{mt:8, fontSize:{xs:48, lg:64}}}>
                        Our Products 
                    </Typography>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <Box  sx={{display:'flex', justifyContent:'center', padding:5}}>
                        <Card sx={cardStyleVoyager} >
                            <CardActionArea component={RouterLink} to="/voyager">
                                <CardMedia component="img" image={Voyager} alt="Voyager" sx={cardMediaStyle} />
                                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                        <Typography gutterBottom variant="h5" component="div" sx={{color:'#FA0202'}}>
                                            Voyager-5G
                                        </Typography>
                                    </Box>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <Box sx={{display:'flex', justifyContent:'center', padding:5}}>
                        <Card sx={cardStyleBhoomi} >
                            <CardActionArea component={RouterLink} to="/bhoomi">
                                <CardMedia component="img" image={Bhoomi} alt="Bhoomi" sx={cardMediaStyle} />
                                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                        <Typography gutterBottom variant="h5" component="div" sx={{color:'#FA7E02'}}>
                                            Bhoomi-PPK
                                        </Typography>
                                    </Box>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={12} sx={{textAlign:'center'}}>
                    <Box sx={{height:{xs:5, lg:100}}} />
                </Grid>

                <Grid item xs={12} lg={12} sx={{textAlign:'center'}}>
                    <Typography variant="h3" component="div" sx={{color:'white', fontSize:{xs:'25px', lg:'50px'}}}>
                        Innovating Skies, Connecting Futures
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{width:"100%", height:200}}/>
        </Box>
    )
}

export default Product