import React from 'react'
import Header from "./Header";
import Subscription from "./Subscription";
import About from "./About";
import aboutimage from "../images/about.png"
import Presentation from "./Presentation";
import Contact from "./Contact";
import aboutimage1 from "../images/download.png"
import RemedyForm from "./RemedyForm";
import Treatments from './Treatments/Treatments';

const Home = () => {
  return (
    <div>
      <Header/>
      
      <Treatments/>
      <Subscription/>
      {/* <RemedyForm/> */}
      {/* <About image={aboutimage} title='Comes with all you need for daily life' button ='Get the medicine'/>
      <Presentation/>
      <About image={aboutimage1} title='Subscribe for more benefits' button ='check medicines'/> */}
     <Contact/>
    </div>
  )
}

export default Home
