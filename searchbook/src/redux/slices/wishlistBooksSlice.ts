import { createSlice, AnyAction } from "@reduxjs/toolkit";
import { deflate } from "zlib";
import { AppDispatch, RootState } from "../store";
import { IBookInfo } from "./searchlistBookSlice";

export interface IWishlistbooks{
    books:IBookInfo[]
}
const initialState:IWishlistbooks = {
    books:[]
}
export const initWishlist = (() =>
    (dispatch: AppDispatch, getState: () => RootState) => {
        const newWishlist = JSON.parse(
            localStorage.getItem("wishlist") ?? "[]"
        );
        dispatch(addWishlistToLS(newWishlist));
    }) as unknown as () => AnyAction;
export const addWishlistToLS = ((payload: IBookInfo[]|IBookInfo) =>
    (dispatch: AppDispatch, getState: () => RootState) => {
        const bookItems = payload;
        let newWishlist 
        //const { id } = bookItem;
        console.log("adding to wishlist LS");
        const state = getState().wishlistBooksSlice;
        if(!Array.isArray(bookItems)){
            //single item
            if (!state.books.some((item) => item.id === bookItems.id)){
                newWishlist = [bookItems, ...state.books];
            }
        }
        else{
            //array of items from initalization
            newWishlist = bookItems
        }
        
        
        // if (!state.books.some((item) => item.id === id)) {
        //     newWishlist = [bookItem, ...state.books];
        // } else {
        //     newWishlist = state.books.filter((item) => item.id !== id);
        // }
        
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
        dispatch(addBook(newWishlist));
    }) as unknown as (bookItem: IBookInfo[]|IBookInfo) => AnyAction;
export const removeWishlistToLS = ((payload: string) =>
(dispatch: AppDispatch, getState: () => RootState) => {
    
    const state = getState().wishlistBooksSlice;
    let newWishlist;
    newWishlist = state.books.filter((item) => item.id !== payload);
    // if (!state.books.some((item) => item.id === id)) {
    //     newWishlist = [bookItem, ...state.books];
    // } else {
        
    // }
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    dispatch(deleteBook(payload));
}) as unknown as (bookItem: string) => AnyAction;


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addBook:(state,action)=>{
            state.books = action.payload
            // if(state.books.some(item=>item.id === action.payload.id)){
            //     console.log("already in wishlist")
            // }
            // else{
            //     console.log("add to wishlist")
            //     state.books.push(action.payload)
            // }
        },
        deleteBook:(state,action)=>{
            console.log("delete from wishlist",action.payload)
            const index = state.books.findIndex(item=>item.id === action.payload)
            console.log("index to delete",index)
            state.books.splice(index,1)
            
        }
    }
})
export const {addBook, deleteBook} = wishlistSlice.actions
export default wishlistSlice.reducer