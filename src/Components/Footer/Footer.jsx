import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import bgimg from '../../assets/WorldBestTeams/certo-dark-yellow.svg-removebg-preview.png';

const Footer = () => {

    const divStyle = {
        backgroundImage: `url(${bgimg})`,
      };


    return (
        <div className="text-white w-full md:w-10/12 mx-auto py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10">
                <div className="space-y-8 flex-1 text-[10px]">
                    <p className="text-xl font-bold">Scan. Detect. Remove.</p>
                    <div className="flex gap-10">
                        <FaTwitter className="text-2xl" />
                        <FaFacebook className="text-2xl" />
                        <FaYoutube className="text-2xl" />
                    </div>
                    <div className="flex gap-10">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                    <p>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                    <p>Designed & developed by Bigger Picture</p>
                </div>
                <div className="flex-1">
                    <h1 className="text-xl font-bold">Miro.</h1>
                    <div className="border border-b max-w-[150px] my-5"></div>
                    <div className="space-y-4">
                        <p className="text-yellow-500 font-bold">-- iPhone</p>
                        <p className="text-yellow-500 font-bold">-- Android</p>
                        <p className="text-yellow-500 font-bold">-- Help</p>
                        <p className="text-yellow-500 font-bold">-- About</p>
                        <p className="text-yellow-500 font-bold">-- Insight</p>
                    </div>
                </div>
                <div className="flex-1">
                    <div style={divStyle} className="h-[200px] w-[350px] bg-yellow-500 bg-opacity-80 bg-no-repeat bg-contain bg-center p-6 rounded-3xl space-y-4">
                        <h1 className="text-[#02033B] text-xl font-bold">Sign up to our newsletter</h1>
                        <p className="text-[#02033B]">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                        <div className="w-full rounded-full">
                            <input 
                            type="text" 
                            name="" 
                            id=""
                            className="px-2 py-1 rounded-l-full outline-none text-[#02033B]"
                            placeholder="Email Address" />
                            <button className="bg-[#02033B] px-4 py-1 rounded-r-full">Submit</button>
                        </div>

                    </div>

                </div>
            </div>
            <div className="mt-10">
                <p className="text-[12px] max-w-[500px]">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
            </div>
        </div>
    );
};

export default Footer;