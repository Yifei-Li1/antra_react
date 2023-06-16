import React from 'react';
import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import getBooks  from './api/Api'
import {RootState,AppDispatch} from '../redux/store'
import { useSelector } from 'react-redux';
import './booklist.css'
import { clearResult, IBookInfo, search, changeInputValue,updatePage, ISearchbook, searchSuggestion, clearSuggestion, addFromSuggestion } from '../redux/slices/searchlistBookSlice';
import {addBook, addWishlistToLS} from '../redux/slices/wishlistBooksSlice'
import { Autocomplete, Pagination, TextField } from '@mui/material';

function Search() {
    let input = useSelector<RootState,string>(state=>state.searchlistBookSlice.input);
    const onFocus = useSelector<RootState,boolean>(state=>state.searchlistBookSlice.onFocus);
    const searchBooksState = useSelector<RootState,ISearchbook>(state=>state.searchlistBookSlice);
    
    const {books:searchBooks} = searchBooksState
    const {booksSuggest} = searchBooksState
    //const [searchResult, setSearchResult] = useState([]);
    //const [display,setDisplay] = useState(true);
    let totalPageNumber = Math.ceil(searchBooksState.totalItems/searchBooksState.itemsPerPage)
    if (totalPageNumber > 36){
        totalPageNumber = 36;
    }
    const dispatch:AppDispatch = useDispatch();
    const handleSearch = (input:string)=>{
        console.log("getingbooks",input);
        dispatch(clearResult());
        dispatch(search())
        //setDisplay(true)
    }
    const addbook = (id:string):void=>{
        
        //console.log("adding book",event.currentTarget.parentElement?.getAttribute('data-key'));
        //const id = event.currentTarget.parentElement?.getAttribute('data-key');
        const bookToAdd = searchBooks?.find(item=>item.id === id);
        console.log("bookToAdd",bookToAdd);
        dispatch(addBook(bookToAdd));
    }
    const handleUpdatePage = (page:number):void=>{
        console.log("page",page)
        console.log("totalnumber",totalPageNumber)
        dispatch(updatePage(page))
        dispatch(search())
    }
    const handleFocus = ()=>{
        //dispatch(onfocus());

    }
    return (
    <>
        <div>Search</div>
        {/* <input type = "text" onChange={e=>dispatch(changeInputValue(e.target.value))} value={input} onFocus={handleFocus} /> */}
        <Autocomplete
            
            disablePortal
            id="combo-box-demo"
            options={booksSuggest?booksSuggest.map(item=>item.volumeInfo.title??'no title'):[]}
            onChange={()=>{
                console.log("addFromSuggestion");
                dispatch(search());
                //setDisplay(true);
            }
            }
            //value={input}
            onInputChange={(event, newInputValue) => {
                //setDisplay(false)
                console.log("newInputValue",newInputValue)
                dispatch(changeInputValue(newInputValue));
                dispatch(clearSuggestion())
                dispatch(searchSuggestion());
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="book" />}
        />
        <button className='searchbutton' onClick={()=>handleSearch(input)}>search</button>
        
        <div className='list-wrapper'>
            
            {searchBooks?.map(item=><div className='book-item' key={item.id} data-key={item.id}>
            <img className='img-style' width="150" height="200" src={item.volumeInfo.imageLinks?.smallThumbnail} alt="image"></img>
            <b>title:</b>{item.volumeInfo.title}
            <b>author:</b>{item.volumeInfo.authors}
            
            <button onClick={()=>dispatch(addWishlistToLS(item))}>add</button></div>)}
        </div>
        
       
        <Pagination count={totalPageNumber} variant="outlined" shape="rounded" onChange={(event,page:number)=>handleUpdatePage(page)} />   
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