import React from 'react'
import Footer from '../footer/Footer'
import About from "../About/About";
import Divide from "../Divider/Divider";
import Recommended from "../recommended/recommend";
import Sharp from "../Sharp-Sharp/Sharp";
import BasicTabs from "../Tabs/Tabs";
import Section_1 from "../Section_1/Section_1";
import Official from "../officialstore/Offical";
import Section_2 from "../Section_2/Section_2";

const MainPage = () => {
  return (
    <div>
    
    <Section_1/>
            <Section_2/>
            <BasicTabs/>
            <Sharp/>
            <Recommended/>
            <Official/>
            <Divide/>
            <About/>
            <Footer/>

    </div>
  )
}

export default MainPage