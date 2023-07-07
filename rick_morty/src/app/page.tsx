'use client'
import { FC, useEffect, useState } from "react";
import { getCharacter } from "./api/Api";

import Pagination from '@mui/material/Pagination';
export interface character{
  id:number;
  name:string;
  image:string;
}
export interface fetchResult{
  results:character[]
  info:{
    page:number
  }
}



const Home:FC = ()=>{
  const [characters,setCharacters] = useState<character[]>();
  const [page,setPage] = useState(1);
  const [pageInfo,setPageInfo] = useState<number>(1);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
   
    const newFetch = getCharacter(`https://rickandmortyapi.com/api/character?page=${page}`).then(res=>{
      setLoading(false);
      setCharacters(res.results)
      setPageInfo(res.info.pages)
    });
  },[page])
  const handlePageChange = (event:React.ChangeEvent<unknown>,value:number)=>{
    setPage(value);
  }
  return(
    <>
    {loading?<div className="lds-dual-ring" data-testid="loader"></div>:''}
    <ul className="list-wrapper">
      {characters?.map((item)=><li key={item.id}>{item.name} <img src={item.image} /></li>)}
    </ul>
    
    <Pagination count={pageInfo} onChange={handlePageChange}></Pagination>
    </>
  )
}
export default Home;
// import { character } from "../page";


