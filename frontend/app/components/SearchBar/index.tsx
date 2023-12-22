type SearchBarProps = {
  input: string;
  setInput: (input: string) => void;
  loading: boolean;
};

const SearchBar = ({ input, setInput, loading }: SearchBarProps) => (
  <>
    <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-2 ps-10 text-sm text-gray-300 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-300"
        placeholder="Search podcasts..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />
    </div>
  </>
);

export default SearchBar;