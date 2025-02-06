// HSCodeLookupWidget.jsx

import { Search } from "lucide-react";
import React, { useState } from "react";

/**
 * A simple “HS Code Classification” widget that might let brokers quickly look up
 * or confirm commodity codes, duty rates, etc. Right now it’s just a placeholder.
 */
const HSCodeLookupWidget = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const MOCK_HSCODES = [
    {
      code: "8471.30",
      description: "Portable automatic data-processing machines",
    },
    {
      code: "8523.51",
      description: "Solid-state non-volatile storage devices",
    },
    {
      code: "8708.99",
      description: "Parts and accessories of motor vehicles",
    },
    {
      code: "6204.62",
      description: "Women's or girls' trousers",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // In reality, you'd call an API or database
    const results = MOCK_HSCODES.filter(
      (hs) =>
        hs.code.includes(searchTerm) ||
        hs.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 text-gray-800 h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        HS Code Lookup
      </h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Enter HS code or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-white border border-gray-300 rounded
                       focus:outline-none focus:border-blue-500 text-sm text-gray-700
                       placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Results */}
      {searchResults.length > 0 ? (
        <div className="space-y-2">
          {searchResults.map((hs) => (
            <div
              key={hs.code}
              className="p-2 border border-gray-200 rounded hover:bg-gray-50 transition"
            >
              <p className="font-medium text-gray-800">{hs.code}</p>
              <p className="text-sm text-gray-600">{hs.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 italic">
          No results. Try searching "8471" or "motor vehicles"...
        </p>
      )}
    </div>
  );
};

export default HSCodeLookupWidget;
