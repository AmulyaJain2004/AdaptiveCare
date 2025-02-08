// Import Components this way
// import Footer from './Components/Footer/Footer';
import Landing from "../../Components/Landing/Landing";
import WhyUs from "../../Components/WhyUs/WhyUs";
function Home() {
  return (
    <div>
      {/* Use the imported components here */}
      <Landing />
      <WhyUs/>
    </div>
  );
}

export default Home;
