import React from 'react'
export class MyPureComponent extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        
        if(nextProps !== this.props){
            return false;
        }
        else if(nextState !== this.state){
            return false;
        }
        return true;
    }
}