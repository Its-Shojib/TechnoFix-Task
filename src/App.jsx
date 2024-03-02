import Banner from "./Components/Banner/Banner";
import Collaborate from "./Components/Collaborate/Collaborate";
import Company from "./Components/Company/Company";
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 bg-white">
      <Navbar />
      <Banner />
      <Company />
      <Collaborate />
    </div>
  );
};

export default App;