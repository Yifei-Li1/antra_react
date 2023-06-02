import React from "react";

import { createRoot } from 'react-dom/client';

//import Home from "./Home/Home";

class App extends React.Component {
  
  render() {
    
    return <h1>Hello</h1>;
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

