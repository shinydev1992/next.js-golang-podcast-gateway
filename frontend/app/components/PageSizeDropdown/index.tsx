import { useState } from "react";

type PageSizeDropdownProps = {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

const PageSizeDropdown = ({ pageSize, setPageSize }: PageSizeDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const pageSizes = [10, 15, 20, 25, 30];

  return (
    <div className="relative">
      <button
        className="text-white bg-gray-700 border-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {pageSize}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div className={`z-10 divide-y divide-gray-100 rounded-lg shadow bg-gray-700 absolute ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="py-2 text-sm dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {pageSizes.map((value, index) => (
            <li key={index}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                onClick={() => {
                  setPageSize(value)
                  setIsOpen(false)
                }}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageSizeDropdown;