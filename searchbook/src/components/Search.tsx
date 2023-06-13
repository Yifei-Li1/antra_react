import React from 'react';
import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import getBooks  from './api/Api'
import {addToWishlist,deleteFromWishlist,BookInfo, SearchList,changeInputValue,addSearchResult,clearSearch} from '../redux/redux'
import { useSelector } from 'react-redux';
import './booklist.css'
function Search() {
    let input = useSelector<any,string>(state=>state.searchListBooks.input);
    const searchBooks = useSelector<any,SearchList["books"]>(state=>state.searchListBooks.books);
    const [searchResult, setSearchResult] = useState([]);
    const dispatch = useDispatch();
    const handleSearch = (input:string)=>{
        console.log("getingbooks",input);
        getBooks(`https://www.googleapis.com/books/v1/volumes?q=${input}&startIndex=0&maxResults=20`).then(res=>{
            dispatch(clearSearch());
            setSearchResult(prev=>res.items);
        }
        ).catch(
            err=>alert(err)
        );
    }
    const addbook = (event: React.MouseEvent<HTMLElement>):void=>{
        console.log("adding book",event.currentTarget.parentElement?.getAttribute('data-key'));
        const id = event.currentTarget.parentElement?.getAttribute('data-key');
        const bookToAdd:any = searchBooks.find(item=>item.id === id);
        console.log("bookToAdd",bookToAdd);
        dispatch(addToWishlist(bookToAdd));
    }
    useEffect(()=>{
        searchResult?.forEach(item=>{
            console.log(item)
            if(item["volumeInfo"]["imageLinks"] !== undefined)
                dispatch(addSearchResult({
                    title:item["volumeInfo"]["title"],
                    author:item["volumeInfo"]["authors"],
                    img:item["volumeInfo"]["imageLinks"]["thumbnail"],
                    inWish:false,
                    id:item["id"]}
                    )
                );
            else{
                dispatch(addSearchResult({
                    title:item["volumeInfo"]["title"],
                    author:item["volumeInfo"]["authors"],
                    img:"",
                    inWish:false,
                    id:item["id"]}
                    )
                );
            }
        })
    },[searchResult])
    return (
    <>
        <div>Search</div>
        <input type = "text" onChange={e=>dispatch(changeInputValue(e.target.value))} value={input} />
        <button className='searchbutton' onClick={()=>handleSearch(input)}>search</button>
        <div className='list-wrapper'>
            {searchBooks?.map(item=><div className='book-item' key={item["id"]} data-key={item["id"]}>
            <img className='img-stype' src={item.img} alt="image"></img>
            {item["title"]}
            {item["author"]}
            <button onClick={addbook}>add</button></div>)}
        </div>
    </>
    
  )
}

// function Search() {
//     const [counter,setCounter] = useState(0);
//     return (
//       <>
//         <p>{counter}</p>
//         <button onClick={()=>setCounter(prev=>prev + 1)}>increment</button>
//       </>
//     );
// }
export default Search;