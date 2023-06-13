import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {WishList, BookInfo,deleteFromWishlist} from '../redux/redux'
function Wishlist() {
  const wishlistBooks = useSelector<any,WishList["books"]>(state=>state.wishlistBooks.books);
  const dispatch = useDispatch();
  const handleDelete = (event: React.MouseEvent<HTMLElement>)=>{
    const id = event.currentTarget.parentElement?.getAttribute('data-key');
    const bookToDelete:any = wishlistBooks.find(item=>item.id === id);
    dispatch(deleteFromWishlist(bookToDelete))
  }
  return (
    <>
      <div>Wishlist</div>
      <div className='list-wrapper'>
        {wishlistBooks?.map(item=><div className='book-item' data-key={item.id}>
          <img className='img-stype' src={item.img} alt="image"></img>
          {item["title"]}
          {item["author"]}
        <button onClick={handleDelete}>delete</button>
        </div>)}
      </div>
    </>
    
  )
}

export default Wishlist