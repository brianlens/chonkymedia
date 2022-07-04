import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, IconButton } from '@contentful/f36-components';
import { ChevronDownIcon } from '@contentful/f36-icons'; 

const NavigationMenu = () => {
	return(
		<div id='navigationmenu'>
			<Menu>
				<Menu.Trigger>
					<IconButton
						icon={<ChevronDownIcon/>}
						aria-label='toggle menu'
					/>
				</Menu.Trigger> 
				<Menu.List className='nm-item'>
					<Menu.SectionTitle>What we do</Menu.SectionTitle>
					<Menu.Divider/>
					<Link to='/chonkyphotos'><Menu.Item>Photo</Menu.Item></Link>
					<Link to='/digitalchonk'><Menu.Item>Digital</Menu.Item></Link>
					<Link to='/chonkyfood'><Menu.Item>Chonky Food</Menu.Item></Link>
					<Menu.Divider/>
					<Link to='/aboutchonky'><Menu.Item>About</Menu.Item></Link>
				</Menu.List>

			</Menu> 
		</div>
		);
};

export default NavigationMenu; 