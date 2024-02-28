import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Service = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('https://car-doctors-chi.vercel.app/services')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div className="my-20 px-10">
            <div className="space-y-3 lg:text-center md:text-center text-center md:mb-10">
                <h1 className="text-xl font-bold text-[#FF3811]">Service {services?.length}</h1>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
                {
                    services?.map(service => <div key={service._id} className="card bg-base-100 shadow-xl border">
                    <figure className="px-10 pt-10">
                      <img src={service?.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-lg md:text-xl lg:text-2xl font-medium">{service?.title} </h2>
                      <p className="text-xl text-red-700 font-medium">Price: {service?.price}</p>
                      <div className="card-actions">
                        <Link to={`/cheackOut/${service._id}`} >
                         <button className="btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-inherit hover:text-[#FF3811] hover:border-[#FF3811]">Buy Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
                 <div className="mt-10 text-center">
                    <button className="btn sm:btn-sm md:btn-md lg:btn-md border border-[#FF3811] text-[#FF3811] bg-inherit hover:bg-[#FF3811] hover:text-white">More services</button>
                 </div>
        </div>
    );
};

export default Service;