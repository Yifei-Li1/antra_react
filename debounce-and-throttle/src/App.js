import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'
const App = () => {
  const [counter,setCounter] = useState(0);
  const myDebounce = (func,interval,option) => {
    let timer;
    let {leading,trailing,maxWait} = option;
    leading = leading || false;
    trailing = trailing || true;
    let inLead = leading;
    return function (...args) {
      const context = this;
      if(leading){
        if (inLead){
          func.apply(context,args);
          inLead = false;
        }
        else if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          //timer = null;
          if(!trailing){
  
          }
          else{
            func.apply(context,args);
            inLead = true;
          }
          
        }, interval);
      }
      else{
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          //timer = null;
          if(!trailing){
  
          }
          else{
            func.apply(context,args);
            inLead = true;
          }
          
        }, interval);
      }
      
    };
  };
  const myThrottle = (func,interval,option) => {
    let timer;
    let queueIsFull = false;
    let {leading,trailing,maxWait} = option;
    leading = leading || true;
    trailing = trailing || true;
    return function (...args) {
      const context = this;
      if (!timer && !queueIsFull ){
        console.log("timer is off, queue is empty")
        if(!leading){
          func.apply(context,args);
        }
        else{
          func.apply(context,args);
        }
        
        timer = setTimeout(() => {
         // timer = null;
        }, interval);
      }
      else if(timer && !queueIsFull){
        console.log("timer is on, queue is empty")
        queueIsFull = true;
        timer = setTimeout(() => {
          if(trailing){
            func.apply(context,args);
          }
          else{
            
          }
          
          queueIsFull = false;
          timer = setTimeout(() => {
            timer = null;
          }, interval);
        }, interval);
      }
      else{
        console.log("timer is on, queue is full")
      }
      
    };
  };
  const handleIncrement = ()=>{
    setCounter(prev=>prev + 1)
  }
  // const debouncedIncrement = useCallback(_.debounce(handleIncrement,3000,{'leading': true,'trailing': false}),[]);
  // const throttledIncrement = useCallback(_.throttle(handleIncrement,3000),[],);
  const debouncedIncrement = useCallback(myDebounce(handleIncrement,3000,{'leading': false,'trailing': true}),[]);
  const throttledIncrement = useCallback(myThrottle(handleIncrement,3000,{'leading': true,'trailing': true}),[]);
  return (
    <>
    <p>counter: {counter}</p>
    <button onClick={()=>debouncedIncrement()}>debounced increment</button>
    <button onClick={()=>throttledIncrement()}>throttled increment</button>
    <button onClick={()=>setCounter(0)}>reset</button>
    </>
  )
}

export default App