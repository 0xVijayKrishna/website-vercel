import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import VyomastraLogo  from "../../assets/vyomastra.svg"
import {Link} from 'react-scroll'

const pages = ['Products', 'Software', 'Contact'];
const menuPages = ['About Us'];

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" sx={{background:'black'}}>
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <Box component='img' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={VyomastraLogo} alt="Logo" width={64} height={64} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  flexGrow: 50,
                  color: 'inherit',
                  textDecoration: 'none',
                  ml:2,
                  fontSize:20
                }}
                >
                  Vyomastra Technologies
                </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menuPages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography key={page} variant='title' textAlign="center" onClick={()=> window.open("/aboutus")} >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box component="img" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} src={VyomastraLogo} alt="Logo" width={48} height={48} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 500,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize:15
              }}
            >
              Vyomastra
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                
                    <Typography
                    variant="title"
                    noWrap
                    // component="a"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      flexGrow: 50,
                      fontWeight: 500,
                      color: 'inherit',
                      textDecoration: 'none',
                      my: 2,
                      cursor:'pointer'
                    }}
                      
                    >
                      <Link
                      activeClass="active"
                      to={page}
                      spy={true}
                      smooth={true}
                      offset={-68}
                      duration={500}
                      key={page}
                    >
                      {page}
                    </Link>
                  </Typography>
              ))}

                <Typography
                  variant="title"
                  noWrap
                  component="a"
                  href='/aboutus'
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    flexGrow: 50,
                    fontWeight: 500,
                    color: 'inherit',
                    textDecoration: 'none',
                    my: 2,
                  }}
                  >
                    About Us
                  </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )

}

export default Navbar