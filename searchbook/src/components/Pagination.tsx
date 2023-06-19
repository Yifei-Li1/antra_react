import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, updatePage } from "../redux/slices/searchlistBookSlice";
import { AppDispatch, RootState } from "../redux/store";
const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalItems = useSelector<RootState, number>(
    (state) => state.searchlistBookSlice.totalItems
  );
  const currentPage = useSelector<RootState, number>(
    (state) => state.searchlistBookSlice.currentPage
  );
  const totalPage = Math.min(35, Math.ceil(totalItems / 20));
  //let indexArr: string[] = [];
  const [indexArr,setIndexArr] = useState<string[]>([])
  useEffect(()=>{
    console.log("totalPage : currentPage",totalPage,currentPage)
    if (currentPage === 1) {
        setIndexArr( [
            "1",
            "2",
            "3",
            "4",
            "5",
            "...",
            totalPage + "",
          ])
    } else if (currentPage === 2) {
        
        setIndexArr([
            "1",
            "2",
            "3",
            "4",
            "5",
            "...",
            totalPage + "",
          ])
      
    } else if (currentPage === 3) {
      setIndexArr([
        "1",
        "2",
        "3",
        "4",
        "...",
        totalPage - 1 + "",
        totalPage + "",
      ])
    } else if (currentPage === totalPage - 1) {
      setIndexArr([
        "1",
        "2",
        "3",
        "...",
        totalPage - 2 + "",
        totalPage - 1 + "",
        totalPage + "",
      ])
    } else if (currentPage === totalPage - 2) {
      setIndexArr([
        "1",
        "2",
        "...",
        totalPage - 3 + "",
        totalPage - 2 + "",
        totalPage - 1 + "",
        totalPage + "",
      ])
    } else if (currentPage === totalPage) {
        setIndexArr([
            "1",
            "...",
            totalPage - 4 + "",
            totalPage - 3 + "",
            totalPage - 2 + "",
            totalPage - 1 + "",
            totalPage + "",
          ])

    } else {
        console.log("else in page",currentPage)
        setIndexArr([
            "1",
            "...",
            (currentPage - 1).toString(),
            currentPage.toString(),
            (currentPage + 1).toString(),
            "...",
            totalPage + "",
          ])
    
    }
  },[currentPage,totalItems])

  const handlePageChange = (page: string) => {
    console.log("to page",page)
    dispatch(updatePage(Number(page)));
    dispatch(search());
  };
  return (
    <div>
      {totalPage === 0?'':indexArr.map((item) =>
        item !== "..." ? (
          <button onClick={() => handlePageChange(item)} style={{backgroundColor:currentPage.toString() === item?"blue":"none"}}>{item}</button>
        ) : (
          <span>...</span>
        )
      )}
    </div>
  );
};

export default Pagination;
