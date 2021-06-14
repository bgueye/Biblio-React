import React from 'react';
import Classes from './titreh1.module.css';


const Titreh1 = (props) => {
const monCss = `${Classes.policeTitre} border border-dark p-2 mt-2 text-white text-center bg-primary rounded`;
return <h1 className={monCss}>{props.children}</h1>

}

export default Titreh1;