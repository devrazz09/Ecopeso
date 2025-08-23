const Home : React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Welcome to Ecopeso</h1>
      <p className="text-lg mb-6 text-blue-700">Your trusted platform for eco-friendly transactions.</p>
      <a
        href="/donate"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Support Us
      </a>
    </div>
  );
}
export default Home;