import { getAllByRole, render, screen, waitFor } from "@testing-library/react";
import Wishlist from "./Wishlist";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import wishlistBooksSlice from "../redux/slices/wishlistBooksSlice";
import searchlistBookSlice from "../redux/slices/searchlistBookSlice";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import Search from "./Search";
import Layout from "./Layout";

const createMockStore = (
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
fetch = jest.fn();

describe("Searchbook page", () => {
  beforeEach(() => {
    fetch.mockImplementation(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            items: [
              {
                id: '1',
                volumeInfo: {
                  title: "",
                  authors: [],
                  imageLinks: { thumbnail: "", smallThumbnail: "" },
                },
              },
              {
                id: '2',
                volumeInfo: {
                  title: "",
                  authors: [],
                  imageLinks: { thumbnail: "", smallThumbnail: "" },
                },
              },
            ],
            kind: "",
            totalItems: 2,
          }),
      });
    });
  });
  test("should be able to type in the search bar", () => {
    render(
      <Provider store={createMockStore()}>
        <Search />
      </Provider>
    );

    const inputEl = screen.getByRole("textbox");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveValue("");

    userEvent.type(inputEl, "hello");
    expect(inputEl).toHaveValue("hello");
  });

  test("results should show up after typing keywords and clicking the search button", async () => {
    render(
      <Provider store={createMockStore()}>
        <Search />
      </Provider>
    );
    const inputEl = screen.getByRole("textbox");
    const searchBtnEl = screen.getByText("search");
    let liEls = screen.queryAllByRole("listitem"); // []
    expect(liEls).toHaveLength(0);
    expect(fetch).toBeCalledTimes(0);

    userEvent.type(inputEl, "hello");
    userEvent.click(searchBtnEl);

    liEls = await screen.findAllByRole("listitem");
    
    expect(liEls).toHaveLength(2);
    expect(fetch).toBeCalledTimes(6);
  });

  test("test delete from wishlist", async() => {
    render(
      <Provider store={createMockStore()}>
        <Layout /> 
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const inputEl = screen.getByRole("textbox");
    const searchBtnEl = screen.getByTestId("search-btn");
    
    expect(fetch).toBeCalledTimes(0);

    userEvent.type(inputEl, "hello");
    userEvent.click(searchBtnEl);
    const addBtnEl = await screen.findAllByTestId("add-btn");
    expect(addBtnEl).toHaveLength(2);
    await userEvent.click(addBtnEl[0]);
    await userEvent.click(addBtnEl[1]);
    expect(fetch).toBeCalledTimes(6);
    userEvent.click(screen.getByText('wishlist'))
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();
    
    let bookItems = await screen.findAllByTestId("wishlist-book");
    expect(bookItems).toHaveLength(2)
    const deleteBtn = await screen.findAllByTestId("delete-btn");
    expect(deleteBtn).toHaveLength(2);
    await userEvent.click(deleteBtn[0]);
    const newBooks = await screen.findAllByTestId("wishlist-book");
    expect(newBooks).toHaveLength(1);
  })
})

  


