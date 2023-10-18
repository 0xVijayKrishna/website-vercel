import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';


const Footer = () => {
  return (
    <Box id="Contact"
      component="footer"
      sx={{ background:'black', color:'white',
    }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} >
          <Grid item xs={12} md={8}>
            <Typography variant="h6" color="white" gutterBottom >
              Contact Us
            </Typography>
            <Box onClick={()=> window.open("https://www.google.com/maps/place/12%C2%B020'33.2%22N+76%C2%B036'34.9%22E/@12.3425432,76.6096866,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.3425432!4d76.6096866?entry=ttu", "_blank")} sx={{display:'flex', padding:1, cursor:'pointer'}}>
                <PlaceIcon />
                <Typography sx={{marginLeft:2, color:"white"}} variant="body2" color="text.secondary">
                    4th Main Road, Manchegowdana koppalu, Hebbal 2nd Stage, Mysuru, Karnataka 570017
                </Typography>
            </Box>
            <Box onClick={()=> window.open("mailto:contact@vyomastra.in", "_blank")} sx={{display:'flex', padding:1, cursor:'pointer'}}>
               
                    <EmailIcon />
                <Typography sx={{marginLeft:2, color:"white"}} variant="body2" color="text.secondary">
                    sales@vyomastra.in
                </Typography>
            </Box>
            <Box onClick={()=> window.open("tel:+0821 406 2131", "_blank")} sx={{display:'flex', padding:1, cursor:'pointer'}}>  
                    <PhoneIcon />
                <Typography href='' sx={{marginLeft:2, color:"white"}} variant="body2" color="text.secondary">
                    +91 988-611-0294
                </Typography>
            </Box>
                
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://in.linkedin.com/company/vyomastra" color="inherit">
              <LinkedInIcon sx={{width:48, height:48}} />
            </Link>
            <Link href="https://instagram.com/_vyomastra?igshid=MzRlODBiNWFlZA==" color="inherit">
              <InstagramIcon sx={{width:48, height:48}} />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="subtitle2" color="whitesmoke" align="center" >
            {"Copyright © "}
            <Link color="inherit" href="https://vyomastra.com/">
              Vyomastra Technologies
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer