import React, { useState, useEffect } from "react";
//Update acciotest.json

const App = () => {
  const suggestions = ["Bhopal", "Indore", "Jabalpur", "Itarsi", "Patna", "Gwalior", "Dhanbad", "Jhasi", "Ahemdabad", "Banglore", "Chennai"];
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setFilteredSuggestions(
        suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 500);
  }, [query, suggestions]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Search item</h1>
      <input type="text" value={query} onChange={handleInputChange} />
      <ul>
        {filteredSuggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;