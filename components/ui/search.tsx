"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { searchData, SearchItem } from "@/lib/searchData";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const fuse = useMemo(
    () =>
      new Fuse(searchData, {
        keys: ["title", "description", "category", "url"],
        threshold: 0.3,
      }),
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 1) {
      const searchResults = fuse.search(value);
      console.log("Raw search results:", searchResults.length, "items found");
      console.log("Search results:", searchResults);

      const mappedResults = searchResults.map((result) => result.item);
      console.log("Mapped results:", mappedResults.length, "items mapped");
      console.log("Mapped results data:", mappedResults);

      setResults(mappedResults);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (url: string) => {
    router.push(url);
    setShowResults(false);
    setQuery("");
  };

  return (
    <div ref={searchRef} className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
        className="px-4 py-1 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-kmk-gold w-full"
      />

      {showResults && results.length > 0 && (
        <div
          className="fixed bottom-[60px] sm:bottom-auto sm:absolute sm:top-full left-0 right-0 mx-auto w-[calc(100%-2rem)] sm:w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-[80vh] sm:max-h-96 z-[100]"
          onWheel={(e) => {
            e.stopPropagation();
            e.preventDefault();
            const container =
              e.currentTarget.querySelector(".results-container");
            if (container) {
              container.scrollTop += e.deltaY;
            }
          }}
        >
          <div
            className="results-container overflow-y-auto"
            style={{ maxHeight: "calc(80vh - 40px)" }}
          >
            {results.map((result, index) => (
              <button
                key={index}
                onClick={() => handleResultClick(result.url)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 block overflow-hidden"
              >
                <div className="text-gray-900 font-medium truncate">
                  {result.title}
                </div>
                <div className="text-gray-600 text-sm truncate">
                  {result.description}
                </div>
                <div className="text-gray-400 text-xs truncate">
                  {result.category}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
