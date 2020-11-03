import React from "react";
import Logo from './logo';
import Icon from './icon';
import SmallIcon from './small';
/* Importar los componentes */
import SearchBar from "./search-bar";
import imgBar from "../images/busq.png";

import iconVideo from "../icons/iconfinder_ic_videocam_48px_3669181.png";
import iconModule from "../icons/iconfinder_ic_view_module_48px_3669149.png";
import Login from "./login";
import imgLogin from "../images/login_button.png";
import iconBell from "../icons/iconfinder_icon-ios7-bell_211694.png"
/* Importar los iconos */

export default function Navbar(props) {
  
  return <div className="navbar">
  <Logo 
    logo={props.logo}
  />
  <SearchBar 
    image={imgBar}
  />
  <SmallIcon 
    iconUrl={iconVideo}
  />
  <SmallIcon
    iconUrl={iconModule}
  />
 <SmallIcon
    iconUrl={iconBell}
  />

  <Login 
    image={imgLogin}
  />
</div>;
}
