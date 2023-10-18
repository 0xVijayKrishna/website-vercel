import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Bhoomi from './pages/Bhoomi/Bhoomi'
import Voyager from './pages/Voyager/Voyager'

export let theme = createTheme({typography: {
  h3: {
    fontFamily: 'Staatliches, cursive',
  },
  h4: {
    fontFamily:'Oxygen, sans-serif',
  },
  title: {
    fontFamily:'Oxygen, sans-serif',
  },
  caption: {
    fontFamily:'Oxygen, sans-serif',
  },
  subtitle2: {
    fontFamily:'Oxygen, sans-serif',
  },
  subtitle1: {
    fontFamily:'Oxygen, sans-serif',
  },
  h5: {
    fontFamily:'Oxygen, sans-serif',
  },
  h6: {
    fontFamily:'Oxygen, sans-serif',
  },
}});

function App() {

  return (
    
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}  />
            <Route path="/voyager" element={<Voyager />}  />
            <Route path="/bhoomi" element={<Bhoomi />}  />
            <Route path="/aboutus" element={<AboutUs />}  />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
