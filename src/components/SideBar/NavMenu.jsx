import React from 'react';
import { Box } from '@mui/system';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MSB from './MSB';
import { MenuOpen } from '@mui/icons-material';





const NavMenu = () => {
    const [stateDrawer, setStateDrawer] = React.useState(false);


    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return; }
        setStateDrawer(open);
    };

    const list = () => (
        <Box
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{ paddingY: 2 }}
        >
            <MSB />
        </Box>
    );








    return (
        <Box>
            <Box pl={2}> <MenuOpen onClick={toggleDrawer(true)} sx={{ cursor: 'pointer' }} /></Box>
            <Box >
                <SwipeableDrawer
                    anchor={'left'}
                    open={stateDrawer}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    sx={{
                        '& .MuiBackdrop-root': {
                            backgroundColor: 'transparent'
                        }, '& .MuiDrawer-paper': {
                            backgroundColor: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '20px',
                            height: '90vh',
                            top: '5vh',
                            left: '.8%',
                            // minHeight:'800px'
                        }
                    }}
                >
                    {list('left')}
                </SwipeableDrawer>
            </Box>
        </Box>
    )
}

export default NavMenu
