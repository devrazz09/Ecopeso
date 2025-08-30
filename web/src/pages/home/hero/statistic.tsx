
const StatisticCard = () => {
  return (
    <div className="w-[23%] h-26 flex flex-col justify-center items-center rounded-2xl bg-white/10 backdrop-blur-[2px]">
      <h1 className="text-4xl font-Poppins font-bold text-white">10K+</h1>
      <p className="text-lg font-Poppins text-white mt-2">Trees Planted</p>
    </div>
  )
}

const Statistic = () => {
  return (
    <div className="w-3/5 h-40 flex justify-between items-center mt-15">
      {/* fetch data for statistics then map the component to render the data  */}
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
    </div>
  )
};
export default Statistic;