import React from 'react'
import { Element } from 'react-scroll'

import "./Topcontainer.css";
import Topcontent from '../Topcontent/Topcontent';
const Topcontainer = ({setSelected}) => {
  return (
    <div>
      <Element name="About" className='topcontainer'>
      <Topcontent setSelected={setSelected}/>
      
      </Element>
    </div>
  );
};

export default Topcontainer;
