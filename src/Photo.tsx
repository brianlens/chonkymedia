import React from 'react';
import HomepagePhotoCollage from './components/HomepagePhotoCollage';
import StoneCutter from './components/StoneCutter';

function Photo() {
	return(
		<div>
			<p className='backdrop-p'>  ! = ' / - * + * * - / / * * *CHONKY MEDIA* * - / ! = ' * * *</p>
	        <div className="container mrgnbtm">
		        <div className="row mrgnbtm">
		          <h1>PHOTO</h1>
		          <p>---- a b c d e f g h i j k l m n o p q r s t u v w x y z ---- </p>
		        </div>
	        <div className="row">
	        	<div className="col-md-16">
		            <HomepagePhotoCollage
		            	
		            />
	        	</div>
	        </div>
	        <div>
	          <StoneCutter/>
	        </div>
	     </div>
	    </div>
	)
}

export default Photo; 