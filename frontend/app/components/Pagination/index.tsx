type PaginationProps = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ prevBtnDisabled, nextBtnDisabled, page, setPage }: PaginationProps) => {
  return (
    <nav className="flex justify-end" aria-label="Table navigation">
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-10">
        <li>
          <button 
            className={`flex items-center justify-center px-3 h-8 leading-tight border border-e-0 rounded-s-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white ${ prevBtnDisabled ? "cursor-not-allowed" : "" }`}
            type="button" 
            onClick={() => !prevBtnDisabled ? setPage(page - 1) : null}
          >
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
          </button>
        </li>
        <li>
          <button
            className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white ${ nextBtnDisabled ? "cursor-not-allowed" : "" }`}
            type="button"
            onClick={() => !nextBtnDisabled ? setPage(page + 1) : null}
          >
            <span className="sr-only">Next</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;