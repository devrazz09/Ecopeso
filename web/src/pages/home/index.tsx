import HeroSection from "./hero/index";
import GrowTogetherContainer from "./growtogether/index";
const HomePage : React.FC = () => {
  return (
    <div className="h-vh w-vw pt-4">
      <HeroSection />
      <GrowTogetherContainer />
    </div>
  );
}
export default HomePage;