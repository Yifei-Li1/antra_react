import React from 'react';
import Child from './Child';
import ChildTwo from './ChildTwo';
class Parent extends React.Component{
    state = {
        counter:0
    }
    handleAdd = ()=>{
        console.log("handleAdd");
        this.setState(prev=>{
            return{
                counter:prev.counter+1,
            }
        })
    }
    render(){
        return(
        <>
            <p>MyPureComponent Part</p>
            <p>{this.state.counter}</p>
            <button onClick={this.handleAdd}>+</button>
            <Child />
            <ChildTwo />
           
        </>)
    }
}
export default Parent;