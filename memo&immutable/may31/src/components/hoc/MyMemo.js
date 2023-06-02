import React from "react";

export const MyMemo = (Component) => {
    return class NewComponent extends React.Component {
      
      render() {
        return <Component />;
      }
  
      shouldComponentUpdate(nextProps) {
        if(nextProps !== this.props){
            return false;
        }
        return true;
      }
    };
  };