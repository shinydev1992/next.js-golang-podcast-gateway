const NoTableData = () => {
  return (
    <div className="flex items-center text-center h-96 bg-gray-800">
      <div className="flex flex-col w-full max-w-sm mx-auto">
        <div className="p-3 mx-auto text-blue-500 rounded-full bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <h1 className="mt-3 text-lg text-gray-800 dark:text-white">No podcasts found</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Your search did not match any podcasts. Please try again later.</p>
      </div>
    </div>
  );
};

export default NoTableData;