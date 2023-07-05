import React from 'react';
import {useReducer} from 'react'
const reduce=(state,action)=>{
      if(action.type=="del"){
            const result=state.filter((ele,ind)=>{
                  return ind!==action.payload;
            })
            return result
      }
      
     
}
const Dashboard =()=>{
    const data=[{name:"nani",age:25,role:"devloper"},
                {name:"pk",age:25,role:"devloper"},
                {name:"mb",age:25,role:"devloper"},
                {name:"hk",age:25,role:"devloper"},
                
              ]
    const [state,dispatch]=useReducer(reduce,data)

    const delfun=(index)=>{
           dispatch({type:"del",payload:index})
    }

    return(
    <div> <center><h2>Welcome to Dashboard</h2></center>  
           <table>
                 <tr>
                    <th>Name</th>
                    <th>age</th>
                    <th>role</th>
                 </tr>
                { state.map((ele,index)=>{
                        return(
                           <tr>
                             <td>{ele.name}</td>
                             <td>{ele.age}</td>

                             <td>{ele.role}</td>
                             <button onClick={()=>{delfun(index)}}>delete</button>                      
                                 </tr>
                        )
                    })
                }
           </table>

    </div>
    )
}
export default Dashboard;