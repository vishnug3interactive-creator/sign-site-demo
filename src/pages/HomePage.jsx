import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'


function HomePage() {
  return (
    <Box sx={{display:'grid', gridTemplateColumns: "0.8fr 3.28fr 1.48fr ",height:'100vh'}}>
        <Box>
          <Sidebar/>
        </Box>
        <Box>
            <Header/>
        </Box>
        <Box>dee</Box>
    </Box>
  )
}
    
export default HomePage