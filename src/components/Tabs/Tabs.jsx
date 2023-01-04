import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabsData from './1stTabData/TabData';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import ReactStars from "react-rating-stars-component";
import "./tabs.css"

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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box m={2}>
            <div style={{  background: "white", borderRadius: "20px" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} className='home-page-tab' onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Featured Products" {...a11yProps(0)} style={{
                            fontFamily: 'Archivo',
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "17px",
                            display: "flex",
                            alignItems: "center",
                            color: "#828282"
                        }} />
                        <Tab label="Best Selling Products" {...a11yProps(1)} style={{
                            fontFamily: 'Archivo',
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "17px",
                            display: "flex",
                            alignItems: "center",
                            color: "#828282"
                        }} />

                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div sx={{ width: "100%", padding: "20px", }}>
                        <Grid container >
                            {
                                TabsData.map((item) => {
                                    return (
                                        <>
                                            <Grid item xs={12} sm={6} md={2} >
                                                <Box sx={{ padding: "20px" }}>

                                                    <img
                                                        style={{ borderRadius: "15px", width: "100%" }}
                                                        src={item.image} />
                                                    <Typography style={{
                                                        fontFamily: 'Archivo',
                                                        fontStyle: " normal",
                                                        fontWeight: 500,
                                                        lineHeight: '123.99%',
                                                        color: "#828282",
                                                        fontSize:"14px"
                                                    }}>
                                                        {item.name}
                                                    </Typography>
                                                    <Box style={{
                                                        display: 'flex',
                                                        justifyContent: "space-between", width: "100%"
                                                    }}>
                                                        <Typography style={{
                                                            display: "flex",
                                                            alignItems: "center", margin: "0px",
                                                            fontFamily: 'Arial',
                                                            fontStyle: "normal",
                                                            fontWeight: 800,
                                                            fontSize:"12px"
                                                        }}>
                                                            {item.Disprice}
                                                        </Typography>
                                                        <div >
                                                            <ReactStars
                                                                count={5}
                                                                size={13}
                                                                activeColor="#ffd700"
                                                            />
                                                        </div>
                                                    </Box>
                                                    <Typography style={{
                                                        color: "#828282",
                                                        fontStyle: "normal",
                                                        fontWeight: 500,
                                                        lineHeight: "123.99%"
                                                    }}>
                                                        {item.OrigPrice}
                                                    </Typography>

                                                </Box>

                                            </Grid>
                                        </>
                                    )
                                })
                            }


                        </Grid >
                    </div >
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </div>
        </Box>
    );
}