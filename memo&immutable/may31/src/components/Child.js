import React from 'react';
import { MyMemo } from './hoc/MyMemo';
class Child extends React.Component{
    render(){
        console.log("mymemo test child render");
        return
    }
}
export default MyMemo(Child);
