import { Box } from '@mui/material'
import React from 'react'
import QuesList from './QuesList'

const Questions = () => {
  return (
    <Box className="box-layout">
        <h1 style={{textAlign:"center"}}>Questions? We have answers.</h1>
        <Box className="box-layout">
        <QuesList/>
        </Box>
    </Box>
  )
}

export default Questions