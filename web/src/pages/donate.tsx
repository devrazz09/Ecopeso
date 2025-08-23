const Donate : React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Support Ecopeso</h1>
      <p className="text-lg mb-6 text-green-700">Your donations help us keep Ecopeso running and improve our services.</p>
      <a
        href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Donate via PayPal
      </a>
    </div>
  );
}

export default Donate;