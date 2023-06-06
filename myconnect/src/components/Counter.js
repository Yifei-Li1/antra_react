import {increment,store} from "../redux.js";
import { connect } from 'react-redux'
import React from 'react'
class Counter extends React.Component {
    constructor() {
      super();
    } 
    handleClick = () => {
     this.props.increment()
    };
    render() {
      const {counter} = this.props
      return (
        <>
          <p>{counter}</p>
          <button onClick={this.handleClick}>increment counter</button>
        </>
      );
    }
  }
  /* 
    mapStateToProps,  read state from redux
    mapDispatchToProps
  */
  
  const mapStateToProps = (state) => {
    const {counter} = state
    return {
      counter
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => {dispatch(increment)}
    }
  }
  function myconnect(mapStateToProps, mapDispatchToProps) {
    return function (WrappedComponent) {
      return class extends React.Component {
        render() {
          return (
            <WrappedComponent
              {...this.props}
              {...mapStateToProps(store.getState(), this.props)}
              {...mapDispatchToProps(store.dispatch, this.props)}
            />
          )
        }
        componentDidMount() {
          this.unsubscribe = store.subscribe(this.handleChange.bind(this))
        }
  
        componentWillUnmount() {
          this.unsubscribe()
        }
  
        handleChange() {
          this.forceUpdate()
        }
      }
    }
  }
  export default myconnect(mapStateToProps, mapDispatchToProps)(Counter);