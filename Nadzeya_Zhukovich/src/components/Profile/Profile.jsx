import React from "react";
import './Profile.scss';

export const Profile = ({userName}) =>
    (
        <div className={'profile'}>
            <div className={'userInfo'}>
                <h2>User profile: {userName}</h2>
            </div>
        </div>
    );
