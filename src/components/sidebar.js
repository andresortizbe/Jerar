import React from "react";
import Icon from './icon';
export function Sidebar(props) {
 
 
 
  return <div className="sidebar"> 
 
<Icon iconUrl={props.icons[0].icon}/>
<Icon iconUrl={props.icons[1].icon}/>
<Icon iconUrl={props.icons[2].icon}/>
<Icon iconUrl={props.icons[3].icon}/>


  
  
  
  </div>;
}
