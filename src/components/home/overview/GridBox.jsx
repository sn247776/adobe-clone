import { Box, Paper } from '@mui/material'
import React from 'react'
import Img from '../../../assets/img1.png'
import TvIcon from '@mui/icons-material/Tv';
import TabletIcon from '@mui/icons-material/Tablet';

const GridBox = () => {
  return (
    <Paper>
        <Box sx={{border:"1px solid #5555", width:"340px", height:"400px" ,position:"relative"}}>
            <Box><img src={Img} alt='img1'/></Box>
           
           
            <Box padding={"15px"}>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center",  }}>
                <Box 
                sx={{display:"flex", 
                
                alignItems:"center", 
                gap:"20px",
               }}

                >
                <img src='https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg' width={"50px"}/>
                <h4>Photoshop</h4>
   
                </Box>
                <Box>
                    <TvIcon/>
                    <TabletIcon/>
                </Box>
                </Box>

                <Box sx={{fontSize:"13px", margin:"20px 0"}}>
               <p> Create gorgeous images, rich graphics and incredible art. <a>Learn more</a></p>
                </Box>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center"}}>
            <Box sx={{position:"absolute", width:"300px", bottom:"10px"}}>
                <hr/>
                <Box textAlign={'right'} my={1}>
                <button className='btn-black'>Start free trial</button>
                </Box>
            </Box>
            </Box>
        </Box>
    </Paper>
  )
}

export default GridBox