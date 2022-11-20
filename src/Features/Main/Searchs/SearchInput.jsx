import useSearchs from "../../../Hooks/useSearchs";

function SearchInput() {
  const { onChanges, lastSearch } = useSearchs();
  return (
    <input
      value={lastSearch}
      onChange={onChanges}
      className="search_input"
      placeholder="Search..."
      type="text"
    />
  );
}

export default SearchInput;
