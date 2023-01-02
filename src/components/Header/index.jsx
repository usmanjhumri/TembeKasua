import { Box, Button, FormGroup, TextField, useMediaQuery } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import NavMenu from '../SideBar/NavMenu';
import LOGO from './nav-logo.png'
import ADD_TO_CARD from './basket-icon.png'
import HEART from './heart-icon.png'
import MobileActions from './MobileActions';

const Header = () => {
  const matches = useMediaQuery('(max-width:1000px)');
  const matches700 = useMediaQuery('(min-width:700px)');

  const searchTextField = {
    fontSize: '12px',
    fontWeight: 800,
    minWidth: "400px",
    fieldset: {
      // borderRadius: 0,
      borderRight: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#CDCDCD',
      borderRight: 0
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#CDCDCD',
      borderRight: 0
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#CDCDCD',
      borderRight: 0
    },
  }

  return (
    <Box sx={{ backgroundColor: 'white', boxShadow:'0px 4px 6px -2px rgba(0, 0, 0, 0.15)' }} mb={1} py={.5}>
      <Stack direction={'row'} px={{ xs: 1, md: 5 }} alignItems='center' justifyContent={'space-between'}>
        <Stack direction={'row'} columnGap={{xs:2,md:6}} alignItems='center' justifyContent={'space-between'}>
          {matches ? <NavMenu /> : null}
          <Box component={'img'}
            src={LOGO}
            sx={{
              display: { sm: 'block' },
              width: '100%',
              maxWidth: { xs: '100px', sm: '150px', md: '180px' }
            }} />

          {matches700 && <FormGroup row>
            <TextField sx={searchTextField} size='small' variant="outlined" placeholder="Search food items, classification and categories" />
            <Button size='small' color='success' sx={{ marginLeft: '-11px', fontSize: '11px', borderRadius: '15px', backgroundColor: '#009933', textTransform: 'capitalize' }} variant="contained" disableElevation>
              sEARCH
            </Button>
          </FormGroup>}

        </Stack>

        {!matches && <Stack direction={'row'} alignItems='center' justifyContent={'space-between'}>
          <img src={HEART} alt="" style={{
            cursor: "pointer"
          }} />


          <img src={ADD_TO_CARD} alt="" style={{
            margin: "0px 0.5rem",
            cursor: "pointer"
          }} />







          <Button color='success' variant='contained' sx={{
            // padding: "0px 1rem",
            background: "#009933",
            borderRadius: "10px",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            fontSize: { xs: '10px', sm: '12px', md: '14px' },
            textTransform: 'capitalize'
            // marign:"0px 2rem"
          }} >
            Create Account
          </Button>












          <Button color='success' variant='contained' sx={{
            background: "#BDBDBD",
            // padding: "0px 1rem",
            borderRadius: "10px",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
            marginLeft: "0.7rem",
            fontSize: { xs: '10px', sm: '12px', md: '14px' },
            textTransform: 'capitalize'
          }}>Sign in</Button>

        </Stack>}

        {matches && <MobileActions />}

      </Stack>
    </Box>
  )
}

export default Header