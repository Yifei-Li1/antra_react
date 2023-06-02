import React from 'react';
import { MyPureComponent } from './hoc/MyPureComponent';

class ChildTwo extends MyPureComponent{
    render(){
        console.log("MyPureComponent test child render");
        return
    }
}
export default ChildTwo;