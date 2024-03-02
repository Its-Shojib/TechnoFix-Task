import { FaArrowRightLong } from 'react-icons/fa6';
import img from '../../assets/Brainstormwithoutshadow.jpg.jpg'

const BrainStorm = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto my-10'>
            <h1 className='text-[#050038] text-4xl font-bold my-10'>Built for the way you work</h1>
            <div>
                <ul className='flex flex-wrap justify-between gap-5 text-sm'>
                    <li className='bg-gray-300 py-2 px-3 rounded-full cursor-pointer'>Brainstorming</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Diagramming</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Meetings & Workshops</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Scrum Events</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Mapping</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Research & Design</li>
                    <li className='bg-gray-100 py-2 px-3 rounded-full cursor-pointer'>Strategic Planning</li>
                </ul>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-10 mt-8'>
                <div className='max-w-[380px] p-5 space-y-5'>
                    <h1 className='text-xl font-semibold'>Brainstorming</h1>
                    <p>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
                    <button className='text-blue-600 underline'>Learn more <FaArrowRightLong className='inline pl-2 text-2xl' /></button>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BrainStorm;