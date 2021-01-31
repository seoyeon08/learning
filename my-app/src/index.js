import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginControl from './Chapter07/LoginControl'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(<LoginControl />, document.getElementById('root'));

// function tick() {
// 	const element = (
// 		<div>
// 			<h1>Hello, World!</h1>
// 			<h2>It is {new Date().toLocaleTimeString()}.</h2>
// 		</div>
// 	);
	
// }
// ReactDOM.render(
//     //element,
//     <React.StrictMode>  
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

//setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();