// import './Message.css';

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
/**
 * 
 * @param {*} param0 
 */
// const {id} = this.props.match.params; 
// const {id} = this.props.match.params;
export const CreateChat = ({name}) => {
    return (
        <div>
            <li>
                <Link 
                to="/chats/1"
                >{name}
                </Link>
            </li> 
        </div>
    )     
}
// console.log(id)
// Message.propTypes = {
//     name: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired
// }