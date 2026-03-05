import {useContext} from 'react';
import { appContext } from '../context';

const Hero = (props) => {
const firstName = useContext(appContext);

    return (
        <div>
            <div className="heroWrapper">
              <div className="container">
                <div className="row">
                     <div className="col-md-6">
                          <div className="hero-content">
                            <span>{props.name}</span>
                            <h1>{firstName}</h1>
                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo consectetur fuga exercitationem ipsam totam odit ex aliquam sed aliquid fugit tempora quibusdam placeat, iusto quaerat dolores itaque nemo eveniet provident?</span>
                            <button className='btn hire-me-btn'> HIRE ME </button>
                          </div>
                     </div>
                     <div className="col-md-6">
                        <div className="img-container">
                            <img src={props.image} alt="hero-sec" />
                        </div>
                     </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Hero;