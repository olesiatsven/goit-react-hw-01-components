import React from "react";
import PropTypes from "prop-types";
import styles from '../styles.css/Profile.module.css'


const Profile = ({
    name,
    tag,
    avatar,
    location,
    stats: { followers,views, likes },
}) => {
    return (
        <div class={styles.profile}>
        <div  class="description">
                <img 
                    src={avatar}
                    width="100px"
                    alt="Аватар пользователя"
                    class={styles.avatar}
            />
                <p class={styles.name}>{name}</p>
                <p class={styles.tag}>@{tag}</p>
                <p class={styles.location}>{location}</p>
        </div>

            <ul class={styles.list}>
                <li class={styles.items}>
                    <span class={styles.label}>Followers</span>
                    <span 
                        class={styles.quantity}> {followers}</span>
            </li>
            <li>
                    <span class={styles.label}>Views</span>
                <span class={styles.quantity}> {views}</span>
            </li>
            <li>
                    <span class={styles.label}>Likes</span>
                <span class={styles.quantity}> {likes}</span>
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
    

};

export default Profile;
