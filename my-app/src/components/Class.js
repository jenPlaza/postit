// JavaScript Document
import React, {Component} from 'react';

//Fix your syntax
class Classes extends Component {
	render(){
		return(
		<div className="App">
		<h1>Why Do we use classes?</h1>
		<p>Class are larger and more powerful. They are known as smart components.They pass data through the state</p>
			
			<br/>
		<h3 className="AppResponse">When to use class?</h3>
			<p className="AppResponse">Class Components are best use when you need to use ES6 classes. The class component requires you to extend from React; therefore inheriting its state cycle. Using Class components gives you the opportunity to use constructors and invoke the parent object by using the keyword this. Because they require more code their components are better utilized to pass data through their state.</p>
		</div>
			
		
		);
	}
}

export default Classes;