import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // RS: This is the parent app componet that wraps around everything

// RS: Below line renders parent app to the <div> tag w/ id = "root" in public/index.html
ReactDOM.render(<App />, document.getElementById('root'));