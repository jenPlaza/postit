// JavaScript Document
import React from "react";
import '../sidebar/SideBar.css';
 
class App extends React.Component {
 /* constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }*/
 
  render() {
    return (
      <sidebar pgTitle='My Application'
        /*sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}*/
		style={styles.container}
      >

		<a style={styles.a}href="#">News Feed</a>
          <a style={styles.a}href="#">Messages</a>
          <a style={styles.a}href="#">Watch</a>
      </sidebar>
    );
  }
}
 
export default App;
const styles ={
	container:{
		border:'1px solid green',
		backgroundColor:'white'
	},
	a:{
	display:'block',
}
}