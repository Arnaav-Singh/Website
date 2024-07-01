import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Teachers from "../../components/Teachers/Teachers";

import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import { Container ,useColorModeValue,Box} from "@chakra-ui/react";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Box bg='white' h={20}></Box>
      <Services />
      <Box bg='white' h={20}></Box>
      
      
      
   
     
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
