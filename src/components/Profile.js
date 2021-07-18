import React from "react";
import user from '../user.json';
import PropTypes from "prop-types";


const Profile = ({
    name,
    tag,
    avatar,
    location,
    stats: { followers,views, likes },
}) => {
    return (
        <div class="profile">
        <div  class="description">
                <img 
                    src={avatar}
                    width="200px"
            
                alt="Аватар пользователя"
                class="avatar" 
            />
            <p class="name">{name}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul>
            <li>
                <span class="label">Followers</span>
                <span class="quantity"> {followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity"> {views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity"> {likes}</span>
            </li>
        </ul>
    </div>
    )
    
};
    
Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired

};

export default Profile;
