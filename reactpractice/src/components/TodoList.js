import React, { Component } from "react";
import TodoItem from './TodoItem';
import {getTodos,postTodo,deleteTodo,updateTodo} from '../api/Api';
import "./TodoList.css"
class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            tempInput:"",
            todoList:[],
        }
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("handleSubmit",this.state.tempInput);
        postTodo({content:this.state.tempInput,completed:false}).then((res)=>this.setState((prevState)=>{
          return{
            tempInput:'',
            todoList : [...prevState.todoList,res],
          }
        }))
        
      }
    handleChange=(event)=>{
       
        this.setState((prevState)=>{
          return{
            ...prevState,
            tempInput:event.target.value
          }
    
        })
        //console.log("handleChange",this.state.tempInput);
    }
   
    componentDidMount(){
        getTodos().then((res)=>{
            this.setState((prevState)=>{
                return{
                    ...prevState,
                    todoList:res,
                }
        });

        })
        
    }
    handleDelete=(id)=>{
        deleteTodo(id).then(res=>{
            this.setState(prevState=>{
                return{
                    ...prevState,
                    todoList:prevState.todoList.filter(todo=>todo.id !== id),
                }
            })
        })
    }
    handleEdit=(newTodo)=>{
        console.log("handleEdit",newTodo);
        updateTodo(newTodo).then(res=>
            this.setState(prevState=>{
                return{
                    ...prevState,
                    todoList : prevState.todoList.map(todo=>todo.id === newTodo.id ? {...todo,content:newTodo.content}:todo)
                }
            }))
    }
    handleComplete=(newTodo)=>{
        const input = {...newTodo,completed:!newTodo.completed};
        console.log("handleEdit",newTodo);
        updateTodo(input).then(res=>
            this.setState(prevState=>{
                return{
                    ...prevState,
                    todoList : prevState.todoList.map(todo=>todo.id === newTodo.id ? res:todo)
                }
            }))
    }
    render(){
        console.log("componentDidiMount",this.state.todoList);
        const pendingList = this.state.todoList.filter(todo=>!todo.completed);
        const completeList = this.state.todoList.filter(todo=>todo.completed);
        return(
        <div className="todolist">
            <form>
                <input value={this.state.tempInput} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>submit</button>
            </form>
            
            <div className="todoList-container">
                
                <ul className="todolist-list">
                    <p>pending</p>
                    {pendingList.map(todo=>
                        <TodoItem key={todo.id} todo={todo} completed={todo.completed} onDelete={this.handleDelete} onEdit ={this.handleEdit} onComplete={this.handleComplete} />
                    )}
                </ul>
                
                <ul className="todolist-list">
                    <p>completed</p>
                    {completeList.map(todo=>
                        <TodoItem key={todo.id} todo={todo} completed={todo.completed} onDelete={this.handleDelete} onEdit ={this.handleEdit} onComplete={this.handleComplete}/>
                )}
                    
                </ul>
            </div>
        </div>
        )
    }
}
export default TodoList;