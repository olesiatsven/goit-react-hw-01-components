import React from "react";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from './user.json';
import statisticalData from './statistical-data.json'


const App = () => {
  return (
    <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    
   <Statistics title="Upload stats" stats={statisticalData} />
    
      </>
  );

   
};

export default App;