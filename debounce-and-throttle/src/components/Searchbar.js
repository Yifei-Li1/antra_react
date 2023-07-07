import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
const Searchbar = () => {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const handleChange = (e)=>{
    setInput(e.target.value)
  }
  const handleSearch = (input)=>{
      setKeyword(input)
  }
  const memorizedSearch = useCallback(_.debounce(handleSearch,3000),[]);
  useEffect(()=>memorizedSearch(input),
  [input]);
  return (
    <>
      <div>Searchbar</div>
      <input value={input} onChange={(e)=>handleChange(e)}></input>
      <p>keyword:{keyword}</p>
    </>
  );
};

export default Searchbar;
