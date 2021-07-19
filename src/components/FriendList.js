import React from "react";
import PropTypes from "prop-types";
import styles from '../styles.css/FriendList.module.css'



const FriendList = ({ friends }) => (
    <ul class={styles.friend_list}
    >
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li key={id}
                class={styles.item}>
               <span class={
            isOnline ? styles.Online : styles.Offline
          }
        ></span>
                <img class={styles.avatar} src={avatar} alt="" width="48" />
                <p class="name">{name}</p>
</li>
        ))}
  
</ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isOnline,
            isOnline: PropTypes.bool,
        })
    )
    
    

};

export default FriendList;