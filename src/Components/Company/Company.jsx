import img1 from '../../assets/Walmart_Index_Only.svg.jpg'
import img2 from '../../assets/cisco.svg.jpg'
import img3 from '../../assets/Volvo_Index_Only.svg.jpg'
import img4 from '../../assets/deloitte.svg.jpg'
import img5 from '../../assets/okta.svg.jpg'


const Company = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto my-28'>
            <p className='text-center text-gray-600 mb-8'>Trusted by 45M+ users</p>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-10'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div>
        </div>
    );
};

export default Company;