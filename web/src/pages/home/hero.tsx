import Sidebar from "../../components/sidebar";

const HeroSection: React.FC = () => {
  return (
    <div className="w-[98dvw] h-[98dvh] flex  items-center flex-col rounded-md m-auto bg-[url('./assets/imgs/homebg.png')] bg-no-repeat bg-bottom bg-cover ">
      <Sidebar />
    </div>
  );
}
export default HeroSection;