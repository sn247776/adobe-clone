import { Box } from '@mui/material';
import './App.css';
import NavBar from './components/home/NavBar';
import Hero from './components/home/Hero';
import Overview from './components/home/overview/Overview';
import Cloud from './components/home/Cloud'
import NotSure from './components/home/NotSure';
import CloudMembership from './components/home/membership/CloudMembership';
import Questions from './components/home/questions/Questions';
import Creativity from './components/home/Creativity';
import Footer from './components/home/Footer';

function App() {
  return (
    <Box>
      <Box sx={{position:"sticky", top:"0px", bgcolor:"white", zIndex:"999"}}>
      <NavBar/>
      </Box>
      <Hero/>
      <Overview/>
      <Cloud/>
      <NotSure/>
      <CloudMembership/>
      <Questions/>
      <Creativity/>
      <Footer/>
    </Box>
  );
}

export default App;
