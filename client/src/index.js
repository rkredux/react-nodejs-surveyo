import "materialize-css/dist/css/materialize.min.css"; 
import React from "react"; 
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; 
import { createStore , applyMiddleware } from "redux"; 
import reducers from "./reducers"; 
import reduxThunk from "redux-thunk"; 

import App from "./components/App.js";


//create the redux state store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); 
//an arrow function 
//an object 
//applyMiddleware from redux library. Lets see
//what these things really are. 


//render the App as a child inside the 
//Provider component and pass it the 
//store prop
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.querySelector("#root")); 


// store is the Redux store object and we are changing the definition 
//of its by default meaning. 
// let next = store.display 
// store.dispatch = function dispatchAndLog(action){
// 	console.log("dispatching", action); 
// 	let result = next(action); 
// 	console.log("next state", store.getState())
// 	return result; 
// }

