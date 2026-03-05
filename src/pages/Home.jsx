
import Hero from '../components/Hero';
import Service from './Service';



const data = {
     name : "This web project made by Ratul Raha",
    image : "../../public/images/refargotohp-mzZp_9QpYLc-unsplash.jpg" 
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