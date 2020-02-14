// JavaScript Document
import React, {Component} from 'react';

//Fix your syntax
export default class Exports extends Component {
	render(){
		return(
		<div className="App">
		<h1>Why Do we use export?</h1>
		<p>Exports are like the root file. If you are looking to export multiple components from a single file the declaration should be export.</p>
		<br/>
		<h3 className="AppResponse">When to use export?</h3>
		<p className="AppResponse">Export components are best used when you have a collection of components, class or functions, that need to be exported to access its variables from other js files..</p>
</div>
			
		);
	}
}