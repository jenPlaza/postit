// JavaScript Document
import React from "react";

//images
import whyBlog from '../../images/whyBlog.jpeg'
import socialMedia from '../../images/socialMedia.jpg'

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


const Links = () => {
  return (
     <Typography display="block" variant="body" align="left">
	  <Box component="li" display="block" p={2} m={1}>
      	<Link color="inherit" href="https://www.huffpost.com/entry/why-do-people-blog-the-be_b_8178624"><img width="100%" src={whyBlog} alt="img of a light bulb with red font" /></Link>
	  	{' '}
	  </Box>
	  <Box component="li" display="block" p={2} m={1} >
	  	<Link color="inherit" href="https://buffer.com/resources/psychology-of-social-media"><img width="100%" src={socialMedia} alt="img of 7 people thinking of something" /></Link>
	  	{' '}
	  </Box>
    </Typography>
  );
}

//exporting class SideBarRight
export default function SideBarRight() {
  return (
		<Links />
    );
}
