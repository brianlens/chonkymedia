import React from 'react';
import { SpringGrid, measureItems } from 'react-stonecutter';

//const images = ['https://i.imgur.com/vT3geMP.jpeg', 'https://i.imgur.com/eleyQ73.jpeg'];
const Grid = measureItems(SpringGrid);

const StoneCutter = () => {
    return(
        <Grid
          component='ul'
          columns={5}
          columnWidth={150}
          gutterWidth={5}
          gutterHeight={5}
  //        layout={layout.pinterest}
 //         duration={800}
//          easing='ease-out'
        >
        </Grid>
    );
}


export default StoneCutter