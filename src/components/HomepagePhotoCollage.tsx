import React from 'react';
import { ReactPhotoCollage } from 'react-photo-collage';

const setting = {
  width: '100%',
  height: ['20em', '5em'],
  layout: [6],
  photos: [
    { source: 'https://i.imgur.com/vT3geMP.jpeg' },
    { source: 'https://i.imgur.com/BEgfEaF.jpg' },
    { source: 'https://i.imgur.com/eleyQ73.jpeg' },
    { source: 'https://i.imgur.com/NeHvwFy.jpg' },
    { source: 'https://i.imgur.com/VtBRbqa.jpg' },
    { source: 'https://i.imgur.com/lpw2UvO.jpg' },
    { source: 'https://i.imgur.com/BEgfEaF.jpg' },
    { source: 'https://i.imgur.com/NeHvwFy.jpg' },

  ],
  showNumOfRemainingPhotos: true
}

const HomepagePhotoCollage = () => {
	return(
		<ReactPhotoCollage {...setting}/>
	);
}

export default HomepagePhotoCollage