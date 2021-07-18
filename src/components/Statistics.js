import React from 'react';
import statisticalData from '../statistical-data.json';


const Statistics = (({ title,stats}) =>  (
        <section class="statistics">
            <h2 class="title">{title}</h2>
        <ul style={{
            display: 'flex',
            padding: '0'
        
        }} class="stat-list">
                {stats.map(({ id, label, percentage }) => (
            
                    <li style={{
                            backgroundColor: 'teal',
                        display: 'table',
                        
                        border: '1px solid black',
                        width: '40px',
                        height: '40px',
                        textAlign: 'center'
                       
                           
                        }} class="item" key={id}>
                        <span  class="label">{label}</span>
                        <br />
                        
                    <span  class="percentage">{percentage}%</span>
                </li>
                
                
                ))}

            
    
            </ul>
        </section>
));

export default Statistics;