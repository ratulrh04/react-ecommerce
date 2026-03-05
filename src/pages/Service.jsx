import { useEffect, useState } from 'react';

const Service = () => {

  const [fake,setFake] = useState([]) 
  useEffect(()=>{
    const fakeStore = async function(){
      const respons = await fetch("https://fakestoreapi.com/products")
      const jsonData = await respons.json();
      console.log(jsonData)
      setFake(jsonData)
    }
   fakeStore()
  },[])
    return (
        <div>
        <div className='card-section mt-5' >
           <div className="container">
           <div className="row">
             {fake.map(function(val){
                return(
                <div className="col-md-4" key={val.id}>
                  <div className="card">
                     <img src={val.image}  alt="card-logo" />
                     <div className="card-body">
                     <h5 className="card-title">{val.title}</h5>
                     <p className="card-text">{val.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                )
             })}           
                </div> 
              </div>
           </div>
       </div> 

      //  service section adding here
         
      
    );
};

export default Service;
