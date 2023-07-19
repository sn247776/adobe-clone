import { Box } from '@mui/material'
import React from 'react'
import GridBox from './GridBox'

const Overview = () => {
  return (
    <Box className="box-layout" sx={{display:"flex", flexDirection:"column", alignItems:"center", my:"2rem"}}>
        <Box sx={{display:"flex", gap:"2rem", fontSize:"14px", fontWeight:"400", color:"#505050"}}>
        <span>Overview</span>
        <span>Photo</span>
        <span>Graphic Design</span>
        <span>Video</span>
        <span>Illustration</span>
        <span>Social Media</span>
        </Box>
        <h2 style={{fontSize:"28px", fontWeight:"500", margin:"3rem"}}>
            Whatever you want to create, we have what you need to make it amazing.</h2>
        <Box className="grid-box">
            <GridBox/>
            <GridBox/>
            <GridBox/>
            <GridBox/>
            <GridBox/>
            <GridBox/>
        </Box>
    </Box>
  )
}

export default Overview