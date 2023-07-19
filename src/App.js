import { Box } from '@mui/material';
import './App.css';
import NavBar from './components/home/NavBar';
import Hero from './components/home/Hero';
import Overview from './components/home/overview/Overview';
import Cloud from './components/home/Cloud'
import NotSure from './components/home/NotSure';
import CloudMembership from './components/home/CloudMembership';

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
    </Box>
  );
}

export default App;
