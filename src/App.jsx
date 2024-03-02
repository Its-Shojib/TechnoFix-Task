import AllTeams from "./Components/AllTeams/AllTeams";
import Banner from "./Components/Banner/Banner";
import BrainStorm from "./Components/BrainStorm/BrainStorm";
import Collaborate from "./Components/Collaborate/Collaborate";
import Company from "./Components/Company/Company";
import ConnectTools from "./Components/ConnectTools/ConnectTools";
import Footer from "./Components/Footer/Footer";
import HybridWork from "./Components/HybridWork/HybridWork";
import Navbar from "./Components/Navbar/Navbar";
import WorkWay from "./Components/WorkWays/WorkWay";
import WorldBestTeams from "./Components/WorldBestTeams/WorldBestTeams";


const App = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto bg-white">
      <div className="px-4 md:px-6 lg:px-8 ">
        <Navbar />
        <Banner />
        <Company />
        <Collaborate />
        <HybridWork />
        <ConnectTools />
        <WorkWay />
        <BrainStorm />
        <AllTeams />
        <WorldBestTeams />
      </div>

      <div className="bg-[#02033B] px-4 md:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default App;