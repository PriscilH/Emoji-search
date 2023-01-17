const Search = ({ results, setResults }) => {
    return (
        <div className="Search">
      <span role="img" aria-label="Sunglasses man">
        😎 EmojiSearch 😎
      </span>
      <input
        type="text"
        value={results}
        onChange={(event) => setResults(event.target.value)}
        placeholder="What emoji are you looking for ?"
      />
    </div>
    );
};

export default Search;