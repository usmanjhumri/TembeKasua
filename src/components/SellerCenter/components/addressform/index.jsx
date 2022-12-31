import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Container } from '@mui/material';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Seller Account Information
      </Typography>
<Container>
<Box mb={4}>
  
 
</Box>



<Grid container>
  <Grid item xs={12} md={4}>
  <label htmlFor="" style={{
    fontWeight:800,
    fontFamily:"arial"
  }}> Shop Name *</label>
  
    
  </Grid>
  <Grid item xs={12} md={8}>
  <Box>
  <input type="text" style={{
    width:"60%",
    height:"30px",
    borderRadius:"5px",
    borderColor:"#f0f5f1",
    // marginLeft:"1rem"
  }} />
  <Typography sx={{
    fontSize:"12px",
  }}>
    Chose a unique name for your online shop this is the name that will appear on the jumia marketplace it is forbidden top use a registered trademark in your shop name without the brand authorization
  </Typography>
    </Box>
  </Grid>


  <Grid item xs={12} md={4}>
    <div style={{
      // textAlign:"end",
      // marginRight:"1rem"
    }}>
  <Typography htmlFor="" style={{
    fontWeight:400,
    fontFamily:"arial",
    fontSize:"15px",
  }}> Please select if you're an individual or Business Entity/Company</Typography>
  
  </div>
  </Grid>
  <Grid item xs={12} md={8}>
  <Box>
  <input type="text" style={{
    width:"60%",
    height:"30px",
    borderRadius:"5px",
    borderColor:"#f0f5f1",
    // marginLeft:"1rem"
  }} />
  
    </Box>
  </Grid>


  <Grid item xs={12} md={4}>
    <div style={{
      // textAlign:"end",
      // marginRight:"1rem"
    }}>
  <Typography htmlFor="" style={{
    fontWeight:400,
    fontFamily:"arial",
    fontSize:"15px",
  }}> Please select if you're an individual or Business Entity/Company</Typography>
  
  </div>
  </Grid>
  <Grid item xs={12} md={8}>
  <Box>
  <input type="text" style={{
    width:"60%",
    height:"30px",
    borderRadius:"5px",
    borderColor:"#f0f5f1",
    // marginLeft:"1rem"
  }} />
  
    </Box>
  </Grid>


  
</Grid>
</Container>
       
      
    </React.Fragment>
  );
}