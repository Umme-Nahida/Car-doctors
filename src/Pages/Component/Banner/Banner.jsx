import img1 from '../../../../public/image/banner/1.jpg'
import img2 from '../../../../public/image/banner/2.jpg'
import img3 from '../../../../public/image/banner/3.jpg'
import img4 from '../../../../public/image/banner/4.jpg'
import img5 from '../../../../public/image/banner/5.jpg'
import img6 from '../../../../public/image/banner/6.jpg'
import useRedirect from '../../../hooks/useRedirect'

const Banner = () => {
    const loginPage = useRedirect()
    return (
        <div className="carousel bg-black relative">
            <div id="slide1" className="carousel-item w-full lg:h-[600px] md:h-[400px] bg-red-500">
                <img src={img1} className="w-full" />
                <div className="absolute flex items-center h-full transform lg:pl-10 w-full  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:text-left md:text-center text-center md:px-5 lg:pl-5 lg:w-1/2 space-y-7'>
                        <h1 className='text-2xl md:text-5xl lg:text-6xl font-medium'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-inherit hover:text-white hover:border-white mr-4'>Discover More</button>
                            <button onClick={()=>loginPage()} className='btn sm:btn-sm md:btn-md lg:btn-md border border-white text-white bg-inherit hover:bg-[#FF3811] hover:text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:flex lg:flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0  ">
                    <a href="#slide4" className="btn sm:btn-sm md:btn-md lg:btn-md btn-circle mt-0 mr-5">❮</a>
                    <a href="#slide2" className="btn sm:btn-sm md:btn-md lg:btn-md  btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full lg:h-[600px] md:h-[400px]">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center h-full transform lg:pl-10 w-full  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:text-left md:text-center text-center md:px-5 lg:w-1/2 space-y-7'>
                        <h1 className='text-2xl md:text-5xl lg:text-6xl font-medium'>Affordable Price For <br /> Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:flex lg:flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full lg:h-[600px] md:h-[400px]">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center h-full transform lg:pl-10 w-full  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:text-left md:text-center text-center md:px-5 lg:w-1/2 space-y-7'>
                        <h1 className='text-2xl md:text-5xl lg:text-6xl font-medium'>Affordable Price For <br /> Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:flex lg:flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full lg:h-[600px]  md:h-[400px]">
                <img src={img4} className="w-full" />
                <div className="absolute flex items-center h-full transform lg:pl-10 w-full  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:text-left md:text-center text-center md:px-5 lg:w-1/2 space-y-7'>
                        <h1 className='text-2xl md:text-5xl lg:text-6xl font-medium'>Affordable Price For <br /> Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:flex lg:flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full lg:h-[600px] md:h-[400px] ">
                <img src={img5} className="w-full" />
                <div className="absolute flex items-center h-full transform lg:pl-10 w-full  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:text-left md:text-center text-center md:px-5 lg:w-1/2 space-y-7'>
                        <h1 className='text-2xl md:text-5xl lg:text-6xl font-medium'>Affordable Price For <br /> Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:flex lg:flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full lg:h-[600px] md:h-[400px] h-[350px]">
                <img src={img6} className="w-full" />
                <div className="absolute flex items-center h-full transform lg:pl-10 w-full  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:text-left md:text-center text-center md:px-6 lg:w-1/2 space-y-7'>
                        <h1 className='text-2xl md:text-5xl lg:text-6xl font-medium'>Affordable Price For <br /> Car Servicing</h1>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:flex lg:flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;