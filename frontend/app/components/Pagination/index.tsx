type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ page, setPage }: PaginationProps) => {
  return (
    <nav className="flex justify-end" aria-label="Table navigation">
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight border rounded-s-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Previous</a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">1</a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">2</a>
        </li>
        <li>
          <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 border hover:bg-blue-100 hover:text-blue-700 border-gray-700 bg-gray-700 text-white">3</a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">4</a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">5</a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;