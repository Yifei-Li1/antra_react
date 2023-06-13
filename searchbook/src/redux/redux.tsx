import { createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
//action
export interface BookInfo {
    title:string,
    author:string[],
    img:string|undefined,
    inWish:boolean,
    id:string
}

export interface WishList {
    books:BookInfo[]
}
export interface SearchList{
    input:string,
    books:BookInfo[]
}

export interface Action{
    type:string,
    payload:BookInfo,
}
export const addToWishlist = (bookInfo:BookInfo)=>{
    return{
        type:'ADD',
        payload:bookInfo
    }
}
export const deleteFromWishlist = (bookInfo:BookInfo)=>{
    return{
        type:'DELETE',
        payload:bookInfo
    }
}
export const addSearchResult = (bookInfo:BookInfo)=>{
    return{
        type:'ADD_TO_Search',
        payload:bookInfo
    }
}
export const clearSearch = ()=>{
    return{
        type:'CLEAR_SEARCH',
    }
}
export const changeInputValue = (input:String)=>{
    return{
        type:'CHANGE_INPUT_VALUE',
        payload:input
    }
}
const initWish = {
    books:[]
}
const initSearch={
    input:'',
    books:[]
}
//reducer
const wishlistBooks = (wishlist:WishList = initWish,action:Action)=>{
    switch (action.type){
        case 'ADD':
            return {...wishlist,books:[...wishlist.books,action.payload]}
        case 'DELETE':
            const index = wishlist.books.findIndex(item=>item === action.payload)
            return {...wishlist,books:[...wishlist.books.slice(0, index), ...wishlist.books.slice(index + 1)]}
        default:
            return wishlist;
    }
}
const searchListBooks = (searchList:SearchList = initSearch,action:Action)=>{
    switch(action.type){
        case 'CLEAR_SEARCH':
            return {...searchList,books:[]}
        case 'ADD_TO_Search':
            return {...searchList,books:[...searchList.books,action.payload]}
        case 'CHANGE_INPUT_VALUE':
            return {...searchList,input:action.payload}
        default:
            return searchList
    }
}
const allReducer = combineReducers({
    wishlistBooks,
    searchListBooks
})
export const store = createStore(allReducer,composeWithDevTools());
 