import React, { Component }  from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
/*import SideNav from './side-nav/SideNav'*/
import SideBar from './components/sidebar/SideBar';

class App extends Component {
  render() {
  return (
	  <div style={styles.container}>
	   <Header pgTitle='My Application' />
	 <SideBar pageWrapId={"page-wrap"} outerContainedID={"App"} />
	 
	  
    <Footer/>
	  </div>
  	)
  }
}

export default App;

const styles ={
	container:{
		border:'1px solid red',
		
	}
}