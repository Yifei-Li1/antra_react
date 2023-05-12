
const API = (() => {
  const URL = "http://localhost:3000";
  const getCart = () => {
    // define your method to get cart data
    fetch(URL+"/cart").then(data=>data.json());
  };

  const getInventory = () => {
    // define your method to get inventory data
    fetch(URL+"/inventory").then(data=>data.json());
  };

  const addToCart = (inventoryItem) => 
    // define your method to add an item to cart
    fetch(URL+"/cart",{
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(inventoryItem),
  }).then(data=>data.json());
  

  const updateCart = (id, newAmount) => 
    // define your method to update an item in cart
    fetch(URL+"/cart/"+id,{
      method: 'PATCH',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newAmount),
  }).then();
  

  const deleteFromCart = (id) => {
    // define your method to delete an item in cart
    fetch(URL + "/" + id, { method: "DELETE" }).then(data => data.json());
  };

  const checkout = () => {
    // you don't need to add anything here
    return getCart().then((data) =>
      Promise.all(data.map((item) => deleteFromCart(item.id)))
    );
  };

  return {
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  };
})();
/*{
  content:apple,
  amount:0
}
*/
const Model = (() => {
  // implement your logic for Model
  class State {
    #onChange;
    #inventory;
    #cart;
    constructor() {
      this.#inventory = [
        {
          content: "apple",
          id: 1
        },
        {
          centent: "peach",
          id: 2
        }
      ];
      this.#cart = [];
    }
    get cart() {
      return this.#cart;
    }

    get inventory() {
      return this.#inventory;
    }

    set cart(newCart) {
      this.#cart = newCart;
    }
    set inventory(newInventory) {
      this.#inventory = newInventory;
      //update view 
    }

    subscribe(cb) {

    }
  }
  const {
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  } = API;
  return {
    State,
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  };
})();

const View = (() => {
  // implement your logic for View
  const appleListEl = document.querySelector(".appleList");
  const peachListEl = document.querySelector(".peachList");
  return {
    appleListEl,
    peachListEl
  };
})();

const Controller = ((model, view) => {
  // implement your logic for Controller
  const state = new model.State();

  const init = () => {};
  const handleUpdateAmount = () => {};

  const handleAddToCartPeach = () => {
    view.peachListEl.addEventListener("click",(event)=>{
      if(event.target.className === "minus-btn"){
        console.log("minus-btn-peach");
        let amountDisplay = +event.target.parentElement.childNodes[3].innerHTML;
        if(amountDisplay === 0) return;
        else{
          amountDisplay--;
          console.log(amountDisplay);
          event.target.parentElement.childNodes[3].innerHTML = ''+amountDisplay;

        }
      }
      else if(event.target.className === "add-btn"){
        console.log("add-btn-peach");
        let amountDisplay = +event.target.parentElement.childNodes[3].innerHTML;
        amountDisplay++;
        console.log("amountDisplay",amountDisplay);
        event.target.parentElement.childNodes[3].innerHTML = ''+amountDisplay;
      }
      else if(event.target.className === "submit-btn"){
        //check if peach already exit in the cart
        let numInCart = 0;
        let id;
        for(item of state.cart){
          if(item.content === "peach"){
            numInCart = item.amount;
            id = item.id;
          }
        }
        console.log("numInCart",numInCart);
        if(numInCart === 0){
          let amountDisplay = +event.target.parentElement.childNodes[3].innerHTML;
          const newItem = {
            content:"peach",
            amount: amountDisplay
          }
          model.addToCart(newItem).then(res=>{
            state.cart = [res,...state.cart];
          });
        }
        else{
          //already in the cart
          let amountDisplay = +event.target.parentElement.childNodes[3].innerHTML;
          amountDisplay += numInCart;
          const newAmount = {
            amount:amountDisplay,
          }
          model.updateCart(id,newAmount).then(res=>{
            state.cart = state.cart.forEach((item) => {
              if(item.content === "peach")
                item.amount++;
            });
          });
        }
        
      }
    })
  };
  const handleAddToCartApple = () => {};

  const handleDelete = () => {};

  const handleCheckout = () => {};
  const bootstrap = () => {
    handleUpdateAmount();
    handleAddToCartPeach();
    handleAddToCartApple();
    handleDelete();
    handleCheckout();
    init();
  };
  return {
    bootstrap,
  };
})(Model, View);

Controller.bootstrap();
