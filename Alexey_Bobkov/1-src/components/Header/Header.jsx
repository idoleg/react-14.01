import React from 'react';
//import PropTypes from 'prop-types';
import './Header.sass';
import { Link } from 'react-router-dom';

export const Header = ({ }) => {


    return (

        (<div className='Header'>
            <h1>Header</h1>
            <h3> 
                <Link to='/Profile'>Profile</Link>
            </h3>
        </div>)
    )
}
