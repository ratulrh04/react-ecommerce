import heroSectionImage from "../assets/ramon-grande-MmcuJ5xVIG0-unsplash.jpg"
import Hero from '../components/Hero';

const About = () => {

   const data = {
     name : "Ratul Raha",
     image: heroSectionImage 
   }


    return (
        <div>
          <Hero {...data} />
        </div>
    );
};

export default About;