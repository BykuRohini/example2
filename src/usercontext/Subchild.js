import React from 'react';
import {useContext} from 'react';
import {UserContext} from './UserContext';
const Subchild=()=>{
  const data=useContext(UserContext)
  const {name,age}=data;
    return(
        <div>
          <h1>SubChild component</h1>
          <p>{name},{age}</p>
        </div>
    )
}
export default Subchild;