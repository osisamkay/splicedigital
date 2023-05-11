import { SearchIcon } from "../assets/icons/searchIcon";
import { ShortCutIcon } from "../assets/icons/shortCut";

function SearchInput({ placeholder }) {
  return (
    <div className="relative w-40   ">
      <span className="absolute inset-y-0  left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </span>
      <input
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-ByeWindGrey-light placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
        placeholder={placeholder}
      />
      <span className="absolute inset-y-0  right-0 pr-3 flex items-center pointer-events-none">
        <ShortCutIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </span>
    </div>
  );
}

export default SearchInput;
