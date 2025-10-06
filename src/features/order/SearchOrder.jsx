import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //this is to prevent the page from reloading and navigating to another link or page
    e.preventDefault();
    // Search logic 
    if(!query) return;
    navigate(`/order/${query}`);
    setQuery(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your order ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=""
      />
    </form>
  );
}

export default SearchOrder;
