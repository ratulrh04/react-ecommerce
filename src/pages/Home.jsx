import image2 from "../assets/refargotohp-mzZp_9QpYLc-unsplash.jpg"

import Hero from '../components/Hero';
import Service from './Service';



const data = {
     name : "This web project made by Ratul Raha",
    image : image2
}


const Home = () => {
    return (
        <div>
        <Hero {...data}/>
        <Service/>
        </div>
    );
};

export default Home;