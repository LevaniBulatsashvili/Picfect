import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

interface ISearchBar {
  onSearch: (query: string) => void;
  disabled: boolean;
  delay?: number;
}

export default function SearchBar({
  onSearch,
  disabled,
  delay = 500,
}: ISearchBar) {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    onSearch(debouncedValue.trim());
  }, [debouncedValue, onSearch]);

  return (
    <div className="flex w-full mb-2">
      <input
        className={`font-[400] text-lg bg-neutral-50 border border-neutral-400 w-full px-[0.6rem] focus:bg-white focus:outline-none ${
          disabled ? "opacity-50 cursor-not-allowed bg-gray-100" : ""
        }`}
        placeholder="Search"
        value={inputValue}
        disabled={disabled}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
