import img from '../../assets/banner.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import img2 from '../../assets/Frame.png'

const Banner = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto flex justify-center items-center gap-10 mt-10'>
            <div className='max-w-[450px] space-y-5 flex-1'>
                <h1 className='text-5xl font-bold text-[#050038]'>Take ideas from better to best</h1>
                <p className='max-w-[400px] font-semibold'>Miro is your {`team's`} visual platform to connect, collaborate, and create — together.</p>

                <div >
                    <form action="">
                        <input
                            type="email"
                            name=""
                            id=""
                            className='w-11/12 px-2 py-2 rounded-full outline-none border border-black mb-2'
                            placeholder='Enter your work email' />
                        <button className="text-white bg-[#4262FF] w-11/12 px-2 py-2 rounded-full">
                            Sign up free <FaArrowRightLong className="inline" />
                        </button>
                        <p className='text-sm text-gray-600'>Collaborate with your team within minutes</p>
                    </form>
                </div>

                <div className='flex items-center gap-3 bg-gray-200 px-2 max-w-[350px] rounded-md'>
                    <div>
                        <ReactStars
                            count={5}
                            value={4}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className='text-[12px] text-[#050038] font-semibold'>Based on 5149+ reviews:</p>
                    </div>
                    <img src={img2} alt="" />
                    <p className='cursor-pointer'>GetApp</p>
                    <p className='cursor-pointer'>Capterra</p>
                </div>

            </div>
            <div className='flex-1'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;