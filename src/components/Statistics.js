import React from 'react';
import PropTypes from "prop-types";
// import styles from '../styles.css/Statistics.module.css'


const Statistics = (({ title,stats}) =>  (
    <section
        style={{
        border: '1px solid lightgrey',
        width: '200px',
        
   
        
    }}
        class="statistics">
        <h2 style={{
            textAlign: 'center'

        }}class="title">{title}</h2>
        <ul
            style={{
            display: 'flex',
            padding: '0',
            margin: '0'
        
        }}
            class="stat_list">
                {stats.map(({ id, label, percentage }) => (
            
                    <li
                        style={{
                        backgroundColor: 'teal',
                        display: 'table',
                        border: '1px solid black',
                        width: '40px',
                        height: '40px',
                        textAlign: 'center'   
                        }}
                        
                        class="item" key={id}>
                        <span  class="label">{label}</span>
                        <br />
                        
                    <span  class="percentage">{percentage}%</span>
                </li>
                
                
                ))}

            
    
            </ul>
        </section>
));

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
    
        })
    )
    

};

export default Statistics;