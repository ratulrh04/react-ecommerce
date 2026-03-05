
import Hero from '../components/Hero';

const About = () => {

   const data = {
     name : "Ratul Raha",
     image: "../../public/images/ramon-grande-MmcuJ5xVIG0-unsplash.jpg" 
   }


    return (
        <div>
          <Hero {...data} />
        </div>
    );
};

export default About;