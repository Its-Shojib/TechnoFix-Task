import { FaArrowRightLong } from 'react-icons/fa6';
import img from '../../assets/uxdesignwithoutshadow.jpg.jpg'
import { TiTick } from "react-icons/ti";

import v1 from '../../assets/Vector/Vector.jpg'
import v2 from '../../assets/Vector/Vector (1).jpg'
import v3 from '../../assets/Vector/Vector (2).jpg'
import v4 from '../../assets/Vector/Vector (3).jpg'

const AllTeams = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto my-10'>
            <h1 className='text-[#050038] text-4xl font-bold my-10'>Built for all kinds of teams</h1>
            <div>
                <ul className='flex flex-wrap justify-start gap-5 text-sm'>
                    <li className='bg-gray-300 py-2 px-3 rounded-full cursor-pointer'>UX & Design</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Marketing</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Product Management</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Engineering</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Consultants</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Agile Coaches</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Sales</li>
                </ul>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-10 mt-8'>
                <div className='max-w-[380px] p-5'>
                    <div className='space-y-3 text-gray-600'>
                        <p className='flex items-center gap-4'><TiTick /> Build low-fi wireframes</p>
                        <p className='flex items-center gap-4'><TiTick /> Involve stakeholders in the design process</p>
                        <p className='flex items-center gap-4'><TiTick /> Run engaging design workshops</p>
                    </div>
                    <button className='text-blue-600 underline mt-5'>Learn more <FaArrowRightLong className='inline pl-2 text-2xl' /></button>
                    <div className='mt-12'>
                        <p>Integrate your favorite tools</p>
                        <div className='flex justify-start items-center gap-5 mt-5'>
                            <img className='cursor-pointer' src={v1} alt="" />
                            <img className='cursor-pointer' src={v2} alt="" />
                            <img className='cursor-pointer' src={v3} alt="" />
                            <img className='cursor-pointer' src={v4} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AllTeams;