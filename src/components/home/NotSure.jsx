import { Box } from '@mui/material'
import React from 'react'

const NotSure = () => {
  return (
    <Box className="not-sure">
        <Box>
        <h3>Not sure which apps are best for you?</h3>
        <p>Take a minute. We’ll help you to figure it out.</p>
        <Box my={2}>
        <button className='btn-blue'>Get started</button>
        </Box>
        </Box>
    </Box>
  )
}

export default NotSure