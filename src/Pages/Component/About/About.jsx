import img1 from '../../../../public/image/about_us/person.jpg'
import img2 from '../../../../public/image/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 px-2 md:px-5 lg:px-10 py-2 md:py-5 lg:py-0">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={img1} className="w-4/5 rounded-lg shadow-2xl" />
                    <img src={img2} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 text-left pt-8 md:pt-14 lg:pt-0'>
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold">About Us</h1>
                    <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    
                    <button className="btn sm:btn-sm md:btn-md lg:btn-lg  border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;