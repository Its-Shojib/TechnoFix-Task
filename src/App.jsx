import AllTeams from "./Components/AllTeams/AllTeams";
import Banner from "./Components/Banner/Banner";
import BrainStorm from "./Components/BrainStorm/BrainStorm";
import Collaborate from "./Components/Collaborate/Collaborate";
import Company from "./Components/Company/Company";
import ConnectTools from "./Components/ConnectTools/ConnectTools";
import HybridWork from "./Components/HybridWork/HybridWork";
import Navbar from "./Components/Navbar/Navbar";
import WorkWay from "./Components/WorkWays/WorkWay";


const App = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 bg-white">
      <Navbar />
      <Banner />
      <Company />
      <Collaborate />
      <HybridWork />
      <ConnectTools />
      <WorkWay />
      <BrainStorm />
      <AllTeams />
    </div>
  );
};

export default App;