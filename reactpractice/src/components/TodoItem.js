import React, { Component } from "react";
import "./TodoItem.css"
class TodoItem extends Component{
    
    constructor(props){
        super(props);
        this.state={
            isEditing : false,
            todo:this.props.todo,
        }
    }
    handleEdit=()=>{
        this.setState(prevState=>{
            return{
                isEditing: !prevState.isEditing,
            }
        })
       
    }
    handleChange=(event)=>{
        //console.log("handleChange",this.todo);
        this.setState((prevState)=>{
          return{
            ...prevState,
            todo:{
                ...prevState.todo,
                content:event.target.value,
            }
          }
    
        })
        
    }
    handleComplete = ()=>{
        this.setState(prevState=>{
            //console.log("handleComplete",this.todo);
            return{
                ...prevState,
                todo:{
                    ...prevState.todo,
                    completed:!prevState.todo.completed,
                }
            }
        })
        
    }
    render(){
        const {todo,completed,onDelete,onEdit,onComplete} = this.props;
        const spanForm = <span>{todo.content}</span>;
        const inputForm = <input value={this.state.todo.content} onChange={this.handleChange}></input>;
        const startEditBt = <button onClick={this.handleEdit}>edit</button>
        
        const finishEditBt = <button onClick={()=>{
            onEdit(this.state.todo);
            this.handleEdit();
        }
            }>finish</button>
        const changeButton = <button onClick={()=>{
            //this.handleComplete();
            onComplete(this.state.todo);
        }}>{(completed?<span>move to pending</span>:<span>move to complete</span>)

        }</button>
        //console.log("render item",todo);
        return(
            <li key={todo.id} className="todoItem">
                {!this.state.isEditing ? spanForm : inputForm}
                <button onClick={()=>onDelete(todo.id)}>delete</button>
                {!this.state.isEditing ? startEditBt : finishEditBt}
                {changeButton}
                
            </li>)
            
        
    }
}
export default TodoItem;