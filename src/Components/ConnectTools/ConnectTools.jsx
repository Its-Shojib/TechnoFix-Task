import { FaArrowRightLong } from "react-icons/fa6";
import img from '../../assets/M3_integrations_all_integrations.png.jpg';

const ConnectTools = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto flex flex-col md:flex-row-reverse justify-center items-center gap-10'>
            <div className='flex-1 space-y-5 '>
            <h1 className='text-4xl text-[#050038] font-bold'>Connect <br /> your tools,<br /> close your tabs</h1>
            <p className='max-w-[400px]'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
            <button className='text-blue-600 underline'>Learn more <FaArrowRightLong className='inline pl-2 text-2xl' /></button>
            </div>
            <div className='flex-1'>
                <img src={img} alt="" />
            </div>
            
        </div>
    );
};

export default ConnectTools;