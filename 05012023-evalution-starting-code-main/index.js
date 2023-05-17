
const API = (() => {
  const URL = "http://localhost:3000";
  const getCart = () => 
    // define your method to get cart data
    fetch(URL+"/cart").then(data=>data.json());
    //fetch(URL+"/cart").then(data=>{data.json()}); 

  const getInventory = () => 
    // define your method to get inventory data
    fetch(URL+"/inventory").then(data=>data.json());
  

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
  

  const deleteFromCart = (id) => 
    // define your method to delete an item in cart
    fetch(URL + "/cart"+"/" + id, { method: "DELETE" }).then(data => data.json());
  

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
    #renderInventory;
    #inventory;
    #cart;
    constructor() {
      this.#inventory = [];
      this.#cart = [];
    }
    get cart() {
      return this.#cart;
    }

    get inventory() {
      return this.#inventory;
    }

    set cart(newCart) {
      console.log("setter");
      this.#cart = newCart;
      this.#onChange();
    }
    set inventory(newInventory) {
      this.#inventory = newInventory;
      this.#renderInventory();
      //update view 
    }

    subscribe(renderList,renderInventory) {
      
      this.#onChange = renderList;
      this.#renderInventory = renderInventory;
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
  const cartListEl = document.querySelector(".cartList");
  const checkoutButtonEl = document.querySelector(".checkout-btn");
  const inventoryListEl = document.querySelector(".itemList");
  const renderList = (tasks)=>{
    console.log("in renderList",cartListEl);
    let tempList = "";
    console.log("renderList",tasks);
    tasks.forEach((task)=>{
        const temp = `<li><span>${task.content} X ${task.amount}<span> <button class="delete-btn" todo-id=${task.id}>delete</button></li>`;
        //console.log(temp);
        tempList += temp;
    });
    //console.log("tempList",tempList);
    cartListEl.innerHTML = tempList;
}
const renderInventory = (items)=>{
  console.log("in renderList",inventoryListEl);
  let tempList = "";
  console.log("renderList",items);
  items.forEach((item)=>{
      const temp = `<li class=${item.content}><label>${item.content}</label> <button class="minus-btn">-</button><span class="amount">${item.amount}</span><button class="add-btn">+</button><button class="submit-btn">add to cart</button></li>`;
      //console.log(temp);
      tempList += temp;
  });
  //console.log("tempList",tempList);
  inventoryListEl.innerHTML = tempList;
}
// const setnewnumber = (newNum,category)=>{
//   let target = inventoryListEl.querySelector(`.${category}`).childNodes[3].innerHTML;
//   target = newNum;
//   inventoryListEl.querySelector(`.${category}`).childNodes[3].innerHTML = target;
//   //console.log("target",target);

//}
  return {
    appleListEl,
    peachListEl,
    cartListEl,
    checkoutButtonEl,
    inventoryListEl,
    renderInventory,
    renderList,
   //setnewnumber
  };
})();

const Controller = ((model, view) => {
  // implement your logic for Controller
  const state = new model.State();

  const init = () => {
    model.getInventory().then(res=> {
      console.log("res",res);
      res.reverse();

      state.inventory = res;
  });
    model.getCart().then(res=> {
      console.log("res",res);
      res.reverse();

      state.cart = res;
  });
    
  }
  //const handleUpdateAmount = () => {};

  const handleAddToCart = () => {
    view.inventoryListEl.addEventListener("click",(event)=>{
      const category = event.target.parentElement.childNodes[0].innerHTML;
      console.log("category",category);
      if(event.target.className === "minus-btn"){
        
        let amountDisplay = +event.target.parentElement.childNodes[3].innerHTML;
        if(amountDisplay === 0) return;
        else{
          amountDisplay--;
          console.log("amountDisplay",amountDisplay);
          //view.setnewnumber(amountDisplay,category);
          //event.target.parentElement.childNodes[3].innerHTML = ''+amountDisplay;
          const temp = state.inventory;
          for(item of temp){
            if(item.content === category){
              item.amount--;
            }
          }
          state.inventory = temp;

        }
      }
      else if(event.target.className === "add-btn"){
        console.log("add-btn");
        // let amountDisplay = +event.target.parentElement.childNodes[3].innerHTML;
        // amountDisplay++;
        // console.log("amountDisplay",amountDisplay);
        //view.setnewnumber(amountDisplay,category);
        //update model by calling set inventory
        const temp = state.inventory;
        for(item of temp){
          if(item.content === category){
            item.amount++;
          }
        }
        state.inventory = temp;
        //event.target.parentElement.childNodes[3].innerHTML = ''+amountDisplay;
      }
      else if(event.target.className === "submit-btn"){
        //check if peach already exit in the cart
        let numInCart = 0;
        let id;
        for(item of state.cart){
          if(item.content === category){
            numInCart = item.amount;
            id = item.id;
          }
        }
        console.log("numInCart",numInCart);
        if(numInCart === 0){
          let amountDisplay = +event.target.parentElement.childNodes[3].innerHTML;
          if(amountDisplay === 0) return;
          const newItem = {
            content:category,
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
            console.log("update",state.cart);
            const tempList = [];
            for(item of state.cart){
              if(item.content === category){
                item.amount = amountDisplay;
              }
              tempList.push(item);
            }
            state.cart = tempList;
          });
        }
        
      }
    })
  };
  const handleDelete = () => {
    view.cartListEl.addEventListener("click",(event)=>{
      if(event.target.className !== "delete-btn") return;
      const id = event.target.getAttribute("todo-id");
      console.log("delete id: ",id,typeof id);
      model.deleteFromCart(id).then((data) => {
          state.cart = state.cart.filter((item) => item.id !== +id);
      });
  })
  };

  const handleCheckout = () => {
    view.checkoutButtonEl.addEventListener("click",(event)=>{
      model.checkout().then(res=>{
        const empty = [];
        state.cart = empty;
      })
    })
  };
  const bootstrap = () => {
    //handleUpdateAmount();
    handleAddToCart();
    handleDelete();
    handleCheckout();
    init();
    state.subscribe(()=>{
      view.renderList(state.cart);
    },
    ()=>{
      view.renderInventory(state.inventory);
    });
    // state.subscribe(()=>
    //   view.renderList(state.cart)
    // );
  };
  return {
    bootstrap,
  };
})(Model, View);

Controller.bootstrap();

