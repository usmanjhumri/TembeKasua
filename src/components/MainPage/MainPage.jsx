import React from 'react'
import About from "../About/About";
import Divide from "../Divider/Divider";
import Recommended from "../recommended/recommend";
import Sharp from "../Sharp-Sharp/Sharp";
import BasicTabs from "../Tabs/Tabs";
import Section_1 from "../Section_1/Section_1";
import Official from "../officialstore/Offical";

const MainPage = () => {
  return (
    <div>

      <Section_1 />
      <BasicTabs />
      <Sharp />
      <Recommended />
      <Official />
      <Divide />
      <About />



    </div>
  )
}

export default MainPage