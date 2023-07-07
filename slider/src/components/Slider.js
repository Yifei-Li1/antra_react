import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Slider.css";
const Slider = (props) => {
  const { size, rangeSelector, color, min, max, mark, step } = props;
  const [valueLeft, setValueLeft] = useState(min);
  const [valueRight, setValueRight] = useState(max);
  const barRef = useRef(null);
  const tagRef = useRef(null);
  const trackRef = useRef(null);
  const tagRefR = useRef(null);
  const inputRefR = useRef(null);

  const inputRefL = useRef(null);

  let width;
  if (size === "big") {
    width = 600;
  } else if (size === "medium") {
    width = 400;
  } else {
    width = 200;
  }
  const leftPercentage = useRef(0);
  const rightPercentage = useRef(100);
  const getPercentage = useCallback(
    
    (left, right) => {
      leftPercentage.current = (left - min) / (max - min);
      rightPercentage.current = (right - min) / (max - min);
      // console.log('left',left,'leftPercentage'+leftPercentage.current);
      // console.log('right',right,'rightPercentage'+rightPercentage.current)
    },
    [min, max]
  );
  //   const getPercentage = (left,right)=>{
  //     leftPercentage.current = left/(max - min);
  //     rightPercentage.current = right/(max - min);
  //   }
  useEffect(() => {
    console.log(inputRefR);
    barRef.current.style.backgroundColor = color;
    barRef.current.style.position = "absolute";
    barRef.current.style.left = "0px";
    barRef.current.style.right = "0px";
    barRef.current.style.top = "37px";
    tagRef.current.style.position = "absolute";
    tagRef.current.style.top = "5px";
    trackRef.current.style.position = "absolute";
    trackRef.current.style.top = "37px";
    trackRef.current.style.width = width + "px";
    inputRefL.current.style.width = width + "px";
    if (rangeSelector) {
      inputRefR.current.style.width = width + "px";
      tagRefR.current.style.position = "absolute";
      tagRefR.current.style.top = "5px";
    }

    if (!rangeSelector) {
      barRef.current.style.left = "30px";
      barRef.current.style.top = "38px";
    }
  }, []);
  useEffect(() => {
    // if (valueLeft > valueRight) {
    //     // console.log('tigger',valueLeft,valueRight)
    //     // setValueLeft(valueRight - 1);
    // }

    if (rangeSelector) {
      getPercentage(valueLeft, valueRight);
      barRef.current.style.position = "absolute";

      barRef.current.style.left = leftPercentage.current * width + "px";
      tagRef.current.style.left = leftPercentage.current * width * 0.97 + "px";
      tagRefR.current.style.left =
        rightPercentage.current * width * 0.97 + "px";
      barRef.current.style.right = (1 - rightPercentage.current) * width + "px";
      // console.log(
      //   "left",
      //   valueLeft,
      //   leftPercentage.current,
      //   barRef.current.style.left
      // );
    } else {
      
      getPercentage(min, valueLeft);
      barRef.current.style.position = "absolute";
      barRef.current.style.left = "0px";
      barRef.current.style.width =
        (rightPercentage.current - leftPercentage.current) * width + "px";
      tagRef.current.style.left =
        (rightPercentage.current - leftPercentage.current) * width * 0.97 +
        "px";
    }

    //console.log("right", valueRight, rightPercentage.current);
  }, [valueLeft, valueRight]);
  //Developers can choose to have number marks on the slider track by providing value in props.
  let valueMark;
  if (mark !== undefined) {
    valueMark = (
      <datalist id="left-list">
        <option value={mark}></option>
      </datalist>
    );
  } else {
    valueMark = "";
  }

  return (
    <div
      style={{ width: width + "px", position: "relative" }}
      className="input-wrapper"
    >
      <input
        className="small-input left-z"
        aria-label="small"
        aria-valuenow="46"
        aria-orientation="horizontal"
        aria-valuemax="100"
        aria-valuemin="0"
        type="range"
        min={min ?? 0}
        max={max ?? 100}
        step={step ?? 1}
        onChange={(e) => {
          setValueLeft(e.target.value);
          // if(e.target.value < valueRight){
          //     setValueLeft(e.target.value)
          // }
        }}
        value={valueLeft}
        ref={inputRefL}
        //style={leftInput}
        list="left-list"
      />

      {valueMark}
      {rangeSelector ? (
        <input
          type="range"
          aria-label="small"
          aria-valuenow="46"
          aria-orientation="horizontal"
          aria-valuemax="100"
          aria-valuemin="0"
          className="small-input right-z"
          //style={rightInput}
          value={valueRight}
          min={min}
          max={max}
          ref={inputRefR}
          step={step ?? 1}
          onChange={(e) => {
            setValueRight(e.target.value);
            // if(e.target.value > valueLeft){
            //   setValueRight(e.target.value)
            // }
          }}
        />
      ) : (
        ""
      )}
      {rangeSelector ? (
        <span className="valueTag" ref={tagRefR}>
          {valueRight}
        </span>
      ) : (
        ""
      )}

      <span
        ref={barRef}
        className="rangeBar"
      ></span>
      <span ref={trackRef} className="track-background"></span>
      <span className="valueTag" ref={tagRef}>
        {valueLeft}
      </span>
    </div>
  );
};

export default Slider;
