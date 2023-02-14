const SearchBar = () => {
  return (
    <div>
      <form method="GET" action="/search">
        <input type="text" name="query" />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default SearchBar;
