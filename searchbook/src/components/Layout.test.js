import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import searchlistBookSlice from "../redux/slices/searchlistBookSlice";
import wishlistBooksSlice from "../redux/slices/wishlistBooksSlice";
import { screen, configure } from '@testing-library/react';
import userEvent from "@testing-library/user-event";


const createMockStore = (
    preloadedState = {
        searchlistBookSlice: {
        booksSuggest:[],
        books:[],
        input:'',
        currentPage:1,
        itemsPerPage:20,
        totalItems:0,
        showSuggest:false
      },
      wishlistBooksSlice: {
        books: [],
      },
    }
  ) => {
    return configureStore({
      reducer: {
        searchlistBookSlice,
        wishlistBooksSlice,
      },
      preloadedState,
    });
  };
test("full app navigation", () => {
  render(
    <Provider store={createMockStore()}>
      <Layout /> 
    </Provider>,
    { wrapper: BrowserRouter }
  );
  //const user = userEvent.setup()
  
  expect(screen.getByText("Search")).toBeInTheDocument();
  userEvent.click(screen.getByText('wishlist'))
  expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();
});
