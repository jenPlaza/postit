// JavaScript Document
import React from "react";
import '../sidebarleft/SideBarLeft.css';
 
class SideBarLeft extends React.Component {
  render() {
    return (
      <section
        /*sidebar={<b>Menu</b>}*/
		style={styles.container}
      >

		<button style={styles.btn}href="#">News Feed</button>
          <button style={styles.btn}href="#">Messages</button>
          <button style={styles.btn}href="#">Watch</button>
      </section>
    );
  }
}
 
export default SideBarLeft;

const styles ={
	
	btn:{
	display:'block',
		border:'none',
		fontSize:'1em'
}
}
