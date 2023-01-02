import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RIAN from './Rian.png'
import { Button, Grid } from '@mui/material';
import './index.css'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Basictabss() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
    width: '100%',  
    background:"#009933",
    borderRadius:"0px 0px 20px 20px",
    padding:"2rem 1.5rem",
    gap:"10px",
     }}>
      
      <TabPanel value={value} index={0}>
        <Box  sx={{
    background:"#009933",
    borderRadius:"0px 0px 20px 20px",
    padding:"1rem 1.5rem",
    gap:"10px",

}}>
<div>
    <Grid container>
        <Grid item xs={12}  md={10.4}>
            <Box sx={{
                display:"flex",
            }}>
                <div>
                    <img src={RIAN} alt="" />
                    </div>
                    <Box>
                        <Typography sx={{
                            fontSize:"36px",
                            fontWeight:700,
                            fontFamily:"Archivo",
                            fontStyle:"normal",
                            color:"#FFFFFF",
                            textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
                            textTransform:"capitalize",
                            marginTop:"2rem",
                            marginLeft:"2rem",
                        }}>best grains</Typography>

                        <Typography sx={{
                            fontSize:"20px",
                            fontWeight:400,
                            fontFamily:"Archive",
                            color:"#F0F5F1",
                            fontStyle:"normal",
                            marginLeft:"2rem",

                        }}>97.8% Positive Feedback   347 Followers </Typography>
                    </Box>

                    
            </Box>
            </Grid>
<Grid item xs={12} m="auto" md={1.6}>
            <Box>
                        <Button sx={{
                          background:"#FFFFFF",
                          borderRadius:"10px",
                          padding:"11px 18px",
                          color:"#60D913",
                          fontSize:"16px",
                          fontWeight:600,
                          textTransform:"capitalize",
                          fontFamily:"Archivo",
                          fontStyle:"normal"
                        }}>follow store</Button>
                    </Box>

                    </Grid>
        
        
    </Grid>
</div>
</Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>


      <Box  sx={{ borderTop: 1, borderColor: '#FFFFFF' }}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  sx={{color:"#BDBDBD"}} className='tabss' label="New arrival" {...a11yProps(0)} />
          <Tab  sx={{color:"#BDBDBD"}} className='tabss' label="Hottest deals" {...a11yProps(1)} />
          <Tab  sx={{color:"#BDBDBD"}} className='tabss' label="Best selling" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
}