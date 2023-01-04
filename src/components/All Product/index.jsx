import { Box, Typography } from '@mui/material'
import React from 'react'
import MSection_2 from './subcomponents/Section_2/MSection_2'
import MSection_3 from './subcomponents/Section_3/MSection_3'

const AllProducts = () => {
  return (
    <div>
        <Box>
            <Typography sx={{
                  fontSize:"36px",
                  fontWeight:700,
                  fontFamily:'Archivo',
                  color:"#000000"
            }}>
                All Products
            </Typography>
        </Box>
      <MSection_2/>
      <MSection_3/>
    </div>
  )
}

export default AllProducts
