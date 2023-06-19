import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchlistBookSlice, {
  changeInputValue,
  IBookInfo,
  search,
  searchSuggestion,
  toggleSuggestion,
} from "../redux/slices/searchlistBookSlice";
import { AppDispatch, RootState } from "../redux/store";
import "./booklist.css";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const input = useSelector<RootState, string>(
    (state) => state.searchlistBookSlice.input
  );
  const [selectIndex, setSelectIndex] = useState(-1);
  const showSuggestion = useSelector<RootState, boolean>(
    (state) => state.searchlistBookSlice.showSuggest
  );
  const suggestions = useSelector<RootState, IBookInfo[]>(
    (state) => state.searchlistBookSlice.booksSuggest
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleSuggestion(true));
    dispatch(changeInputValue(e.target.value));

    dispatch(searchSuggestion());
  };
  return (
    <>
      <div>Search</div>
      <div className="searchBar-wrapper">
        <input
          className="input-bar"
          defaultValue={"input"}
          onChange={(e) => handleChange(e)}
          value={input}
          onFocus={() => dispatch(toggleSuggestion(true))}
          onBlur={()=>{
            dispatch(toggleSuggestion(false));
            }}
        onKeyDown={(e) => {
            const key = e.key;
            //console.log("key", key);
            if (key === "ArrowDown") {
                if (selectIndex === 9) {
                    setSelectIndex(0);
                } else {
                    setSelectIndex((prev) => prev + 1);
                }
            } else if (key === "ArrowUp") {
                if (selectIndex === 0) {
                    setSelectIndex(9);
                } else {
                    setSelectIndex((prev) => prev - 1);
                }
            } else if (key === "Enter") {
                if(typeof suggestions !== undefined){
                    dispatch(changeInputValue(suggestions[selectIndex].volumeInfo.title));
                    dispatch(toggleSuggestion(false));
                    dispatch(search());
                }
                

            }
        }}
        ></input>
        <button
          onClick={() => {
            dispatch(toggleSuggestion(false));
            dispatch(search());
          }}
        >
          search
        </button>
        {showSuggestion ? (
        <ul className="suggestion-list">
          {suggestions?.slice(0,10).map((item,index) => (
            <li 
            
            className="suggestion-item"
            style={{
                outline:
                    selectIndex === index
                        ? "solid 1px rgba(0, 0, 0, 0.5)"
                        : "none",
            }}
              onMouseDown={() => {
                dispatch(changeInputValue(item.volumeInfo.title));
                dispatch(search());
                dispatch(toggleSuggestion(false));
              }}
              
            >
              {item.volumeInfo.title}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      </div>
      
    </>
  );
};

export default SearchBar;
