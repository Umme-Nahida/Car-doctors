import img1 from '../../../../public/icons/group.svg'
import img2 from '../../../../public/icons/Group 38729.svg'
import img3 from '../../../../public/icons/deliveryt.svg'
import img4 from '../../../../public/icons/Wrench.svg'
import img5 from '../../../../public/icons/person.svg'
import img6 from '../../../../public/icons/check.svg'


const ChooseUs = () => {
  return (
    <div className='px-10 py-3 md:py-10 lg:py-10'>
      <div className="space-y-3 lg:text-center md:text-center text-center">
        <h1 className="text-xl font-bold text-red-700">Core Features</h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Why Choose Us</h1>
        <p>
        the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. 
        </p>
      </div>

      {/* choose us div cart */}
      <div className='flex-cols md:flex-1 lg:flex justify-center items-center gap-5 md:gap-10 lg:gap-20 py-10'>
         <div className='border-2 text-center mx-auto p-5 space-y-2 rounded-lg mb-2 md:mb-3 lg:mb-0'>
            <img src={img1} alt="" className='mx-auto'/>
            <h3>Expert Team</h3>
         </div>
         <div  className='border-2  text-center p-5 space-y-2 bg-[#FF3811] rounded-lg mb-2 md:mb-3 lg:mb-0'>
            <img src={img2} alt="" className='rounded-lg mx-auto' />
            <h3>Timely Delivery</h3>
         </div>
         <div className='border-2 text-center p-5 space-y-2 rounded-lg mb-2 md:mb-3 lg:mb-0'>
            <img src={img3} alt="" className='mx-auto' />
            <h3>24/7 Support</h3>
         </div>
         <div className='border-2 text-center p-5 space-y-2 rounded-lg mb-2 md:mb-3 lg:mb-0'>
            <img src={img4} alt="" className='mx-auto'/>
            <h3>Best Equipment</h3>
         </div>
         <div className='border-2 text-center p-5 space-y-2 rounded-lg mb-2 md:mb-3 lg:mb-0'>
            <img src={img5} alt="" className='mx-auto' />
            <h3>Best Equipment</h3>
         </div>
         
         <div className='border-2 text-center p-5 space-y-2 rounded-lg mb-2 md:mb-3 lg:mb-0'>
            <img src={img6} alt="" className='mx-auto'/>
            <h3>100% Guranty</h3>
         </div>
      </div>
    </div>
  );
};

export default ChooseUs;
