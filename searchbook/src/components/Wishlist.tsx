import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBook,
  IWishlistbooks,
  addWishlistToLS,
  removeWishlistToLS,
  initWishlist,
} from "../redux/slices/wishlistBooksSlice";
import { RootState } from "../redux/store";
import { IBookInfo } from "../redux/slices/searchlistBookSlice";
import "./booklist.css";
function Wishlist() {
  const wishlistBooks = useSelector<RootState, IBookInfo[]>(
    (state) => state.wishlistBooksSlice.books
  );
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    //const id = event.currentTarget.parentElement?.getAttribute('data-key');
    //const bookToDelete:any = wishlistBooks.find(item=>item.id === id);
    dispatch(removeWishlistToLS(id));
  };
  useEffect(() => {
    dispatch(initWishlist());
  }, []);
  return (
    <>
      <div>Wishlist</div>
      <div className="list-wrapper">
        {wishlistBooks?.map((item) => (
          <div className="book-item" key={item.id} data-testid="wishlist-book">
            <img
              className="img-stype"
              width="150"
              height="200"
              src={item?.volumeInfo?.imageLinks?.smallThumbnail}
              alt="image"
            ></img>
            <b>title:</b>
            {item?.volumeInfo?.title}
            <b>author:</b>
            {item?.volumeInfo?.authors}
            <button data-testid={'delete-btn'}onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
