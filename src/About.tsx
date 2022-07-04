import React from 'react';
import HomepagePhotoCollage from './components/HomepagePhotoCollage';
import StoneCutter from './components/StoneCutter';

function About() {
	return(
		<div>
			<p className='backdrop-p'>  ! = ' / - * + *CHONKY MEDIA* * - / ! = ' * * *</p>
	        <div className="container mrgnbtm">
	        <div className="row">
	          <div className="col-md-16">
	            <HomepagePhotoCollage/>
	          </div>
	        </div>
	        <div className="row mrgnbtm">
	          <h1>CONTACT // ADDRESS</h1>
	          <p>-INFO@CHONKYMEDIA.NL ?? CHASSESTRAAT 83-1 - AMSTERDAM ## +31646396642</p>
	        </div>
	        <div>
	          <StoneCutter/>
	        </div>
	     </div>
	    </div>
	)
}

export default About; 