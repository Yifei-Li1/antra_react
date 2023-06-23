import {render, screen, waitFor} from "@testing-library/react";
import Wishlist from "./Wishlist";
import { configureStore } from "@reduxjs/toolkit";

import wishlistBooksSlice from "../redux/slices/wishlistBooksSlice";
import searchlistBookSlice from "../redux/slices/searchlistBookSlice";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

const createMockStoreEmpty = (
    preloadedState = {
        searchlistBookSlice: {
            booksSuggest: [],
            books: [],
            input: "",
            currentPage: 1,
            itemsPerPage: 20,
            totalItems: 0,
            showSuggest: false,
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

const createMockStoreNonEmpty = (
  preloadedState = {
    searchbookSlice: {
      books: [],
      keyword: "",
      isLoading: false,
      itemsPerPage: 10,
      totalPages: 1,
      currentPage: 1,
    },
    wishlistBooksSlice: {
      books: [{
        id: 1,
        volumeInfo: {
          title: "",
          authors: [],
         
          imageLinks: { thumbnail: "", smallThumbnail: "" },
        },
      },
      {
        id: 2,
        volumeInfo: {
          title: "",
          authors: [],
         
          imageLinks: { thumbnail: "", smallThumbnail: "" },
        },
      }],
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

  fetch = jest.fn();

  describe("Wishlist page", () => {
    
    test("should be empty when there is no book in wishlist", () => {
      render(
        <Provider store={createMockStoreEmpty()}>
          <Wishlist />
        </Provider>
      );

      let bookItems = screen.queryAllByRole("listitem");
      expect(bookItems).toHaveLength(0);
    });

    test("should render results when wishlist is nonempty", () => {
      render(
        <Provider store={createMockStoreNonEmpty()}>
          <Wishlist />
        </Provider>
      )
      let bookItems = screen.queryAllByRole("listitem");
      console.log(bookItems);
      expect(bookItems).toHaveLength(2);
    });

    test("should remove item when icon is clicked", () => {
      render(
        <Provider store={createMockStoreNonEmpty()}>
          <Wishlist />
        </Provider>
      )
      let bookItems = screen.queryAllByRole("listitem");
      expect(bookItems).toHaveLength(2);
      let item1 = bookItems[0];
      let button1 = item1.queryByRole("button");
      userEvent.click(button1);
      let newBookItems = screen.queryAllByRole("listitem");
      expect(newBookItems).toHaveLength(1);
    });
  

  });