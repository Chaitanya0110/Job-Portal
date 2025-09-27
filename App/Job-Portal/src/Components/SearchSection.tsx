
function SearchSection() {
  const jobTypes = ['Remote', 'Full-time', 'Part-time', 'Contract'];

  return (
    <div className="bg-[#1a1a2e] text-white p-12 text-center">
      <h2 className="text-4xl font-bold mb-4">Find Your Dream Job</h2>
      <p className="text-gray-400 mb-8">Discover thousands of opportunities from top companies.</p>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <input 
          type="text"
          placeholder="Search jobs, companies, or keywords..."
          className="border border-gray-600 w-1/2 p-3 rounded-lg text-gray-100 "
        />
        <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">Search</button>
      </div>
      <div className="flex justify-center space-x-4">
        {jobTypes.map(type => (
          <button key={type} className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full hover:bg-gray-600">
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchSection;