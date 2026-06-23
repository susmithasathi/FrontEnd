/*parent.jsx*/

import React from 'react';
import Child from './child'
import { createContext } from 'react'

export const ParentData = createContext(); // creating context with name of "ParentData" .
                                           // we will access parent.jsx data in child.jsx using this "ParentData"

const parent_mesg = "i am Parent osaka"; // creating varible "parent_mesg" with data "i am Parent"
                                  //  this messege gonna tranfer into child.jsx

function Parent() {
  
  return (
    <div>
      <h1>This is Parent component</h1>
      <hr />
      <ParentData.Provider value = {parent_mesg}>  
      <Child/>
      </ParentData.Provider>
    </div>
  );
}

export default Parent;

/*child.jsx*/

import React from 'react';
import { useContext } from 'react'
import  { ParentData }  from './parent' // importing data from parent 

function Child() {
  const data_from_parent = useContext(ParentData) // Assigning to "Assigning_parent_mesg"
  return (
    <div>
      <h1>This Child Component</h1>
      <p> Messege from parent : {data_from_parent} </p>
    </div>
  );
}

export default Child;