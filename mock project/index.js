const APIs = (()=>{
    const url = "http://localhost:3000/todos";
    const getList = ()=>fetch(url)
    .then(data=>data.json())
    .catch(err => console.log(err));
    const postTodo = (body)=>fetch(url,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    }).then(data=>data.json());
    const deleteTodo = (id)=>fetch(url + "/" + id, { method: "DELETE" }).then(data => data.json());
        
    
    return {
        getList,
        postTodo,
        deleteTodo
    }
})()

const Model = (()=>{
    class State{
        #todos;
        #onChange;
        constructor(){
            this.#todos = [];
        }
        get getModel(){
            return this.#todos;
        }
        set setModel(newtodos){
            //console.log("setter"); 
            this.#todos = newtodos;
            //update view
            this.#onChange();
        }
        subscribe(cb){
            this.#onChange = cb;
        }
    }
    const {getList,postTodo,deleteTodo} = APIs;
    return{
        getList,
        postTodo,
        deleteTodo,
        State
    }

})();
const View = (()=>{
    const inputTextEl = document.querySelector(".inputText");
    const submitButtonEl = document.querySelector(".submit-btn");
    const todoListContainerEl = document.querySelector(".todoList-container");
    
    const renderList = (tasks)=>{
        let tempList = "";
        console.log("renderList",tasks);
        tasks.forEach((task)=>{
            const temp = `<li><span>${task.content}<span></li><button class="delete-btn" todo-id=${task.id}>delete</button>`;
            //console.log(temp);
            tempList += temp;
        });
        //console.log(tempList);
        todoListContainerEl.innerHTML = tempList;
    }
    return {
        inputTextEl,
        submitButtonEl,
        todoListContainerEl,
        renderList,
    }
})();
const Controller = ((model,view)=>{
    const state = new model.State();
    
    const handleSubmit = ()=>{
        view.submitButtonEl.addEventListener("click",(event)=>{
            event.preventDefault();
            const input = view.inputTextEl.value;
            const content = {content: input};
            //console.log("handle submit",content);
            model.postTodo(content).then(res =>{
                //console.log("handle submit",res);
                state.setModel = [res,...state.getModel];
            });
        });
    };
    const handleDelete = ()=>{
        view.todoListContainerEl.addEventListener("click",(event)=>{
            if(event.target.className !== "delete-btn") return;
            const id = event.target.getAttribute("todo-id");
            model.deleteTodo(id).then((data) => {
                state.setModel = state.getModel.filter((item) => item.id !== +id);
            });
        })
    };
   
    const init = () => {
        model.getList().then(res=> {
            //console.log(res);
            res.reverse();
            state.setModel = res;
        });
    }
    const bootstrap = () =>{
        handleSubmit();
        handleDelete();
        init();
        state.subscribe(()=>{
            view.renderList(state.getModel);
        });
        
    };
    return{
        bootstrap,
    };
})(Model,View);
Controller.bootstrap();