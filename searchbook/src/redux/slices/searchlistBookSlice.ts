import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import getBooks from '../../components/api/Api'
import { AppDispatch, RootState } from "../store";

export interface IBookInfo {
    volumeInfo: {
        authors: string[] | undefined;
        title: string | undefined ;
        imageLinks:
            | {
                  smallThumbnail: string | undefined;
                  thumbnail: string | undefined;
              }
            | undefined;
    };
    
    id:string
}
export interface ISearchbook{
    booksSuggest:IBookInfo[]|undefined,
    books:IBookInfo[]|undefined,
    input:string,
    currentPage:number,
    itemsPerPage:number,
    totalItems:number,
    onFocus:boolean
}
const initialState:ISearchbook = {
    booksSuggest:[],
    books:[],
    input:'',
    currentPage:1,
    itemsPerPage:20,
    totalItems:0,
    onFocus:false
}

export const search = createAsyncThunk<any,undefined,{dispatch:AppDispatch;state:RootState}>('searbook/search', async (args,thunkAPI)=>{
   // console.log("args")
    
    const {input,currentPage,itemsPerPage} = thunkAPI.getState().searchlistBookSlice
    console.log("input:",input === '');
    if(input !== ''){
        const startIndex = (currentPage - 1) * itemsPerPage;
        const maxResults = itemsPerPage;
        const result = await getBooks(`https://www.googleapis.com/books/v1/volumes?q=${input}&startIndex=${startIndex}&maxResults=${maxResults}`)
        console.log("result from search",result);
        return result
    }
    else{
        
        return {}
    }
    
})


export const searchSuggestion = createAsyncThunk<any,undefined,{dispatch:AppDispatch;state:RootState}>('searbook/searchsuggest', async (args,thunkAPI)=>{
    //console.log("args")
    
    const {input} = thunkAPI.getState().searchlistBookSlice
    console.log("input empty: ",input);
    if(input !== ''){
        const result = await getBooks(`https://www.googleapis.com/books/v1/volumes?q=${input}&startIndex=0&maxResults=20`)
        console.log("searchSuggestion",result);
        return result
    }
    else{
        
        return {}
    }
    
})

const searchlistBookSlice = createSlice({
    name:"searchbook",
    initialState,
    reducers:{
        changeInputValue:(state,action)=>{
            console.log("changeInputValue",action.payload)
            state.input = action.payload
        },
        clearResult:(state)=>{
            state.books = []
        },
        updatePage:(state,action)=>{
            state.currentPage = action.payload
        },
        // onfocus:(state)=>{
            
        //     state.onFocus = !state.onFocus
        //     console.log(state.onFocus)
        // },
        addFromSuggestion:(state)=>{
            const myClonedArray:IBookInfo[] = [];
            state.booksSuggest?.forEach(val => myClonedArray.push(Object.assign({}, val)));
            state.books = myClonedArray
        },
        clearSuggestion:(state)=>{
            state.booksSuggest = []
        }

    },
    extraReducers:(builder)=>{
        builder
            .addCase(search.fulfilled,(state,action)=>{
                if(action.payload["items"] !== undefined){
                    state.books = action.payload.items;
                    state.totalItems = action.payload.totalItems
                }
                
                
            })
            .addCase(search.rejected,(state,action)=>{
                console.log("err", action.error.message);
            })
            .addCase(searchSuggestion.fulfilled,(state,action)=>{
                // state.booksSuggest = action.payload.items
                // console.log('in suggestion search')
                if(action.payload["items"] !== undefined){
                    state.booksSuggest = action.payload.items;
                    
                }
            })
            
        },
        // ]
        // [
            
        // ]
            

   

}
)
export const {changeInputValue,clearResult,updatePage,clearSuggestion,addFromSuggestion} = searchlistBookSlice.actions;
export default searchlistBookSlice.reducer;
