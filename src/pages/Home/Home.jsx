import * as React from 'react';
import Box from '@mui/material/Box';
import LandingPage from '../../sections/Landing/Landing'
import Product from '../../sections/Products/Product'
import Software from '../../sections/Software/Software'
import TrustedBy from '../../sections/TrustedBy/TrustedBy'



const Home = () => {
    return(
        <>
            <Box sx={{background:'linear-gradient(#111111, #333333, #111111)'}}>
                <LandingPage />
                <Product />
                <Software />
            </Box>
            <TrustedBy />
        </>
    )
}
export default Home