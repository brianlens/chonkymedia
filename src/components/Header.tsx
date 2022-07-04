import React from 'react';
import NavigationMenu from './NavigationMenu';
import { Link } from 'react-router-dom';

export const Header = () => {
    
    return (
        <div className="header">
            <div className='logo-div'>
                <Link to='/'><h1>C<i>m</i></h1></Link>
            </div>
            <div>
                <NavigationMenu/>
            </div>
        </div>    
    )
}