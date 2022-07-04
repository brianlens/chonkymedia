import React from 'react';
import ImageGrid from 'react-image-grid-animator';

const images = ['https://i.imgur.com/vT3geMP.jpeg', 'https://i.imgur.com/eleyQ73.jpeg'];


const ImageGridAnimator = () => {
	return(
		<ImageGrid
      images={images}
      visibleCount={10}
      interval={2000}
      animationItemcount={0}
      transitionType={"FADE_AND_SCALE"}
      transitionDuration={200}
      isActive={true}
    />
	);
}

export default ImageGridAnimator