import React from 'react';
import {useReducer} from 'react'
const reduce=(state,action)=>{
         if(action.type=="delete"){
            const result=(state.filter((ele,ind)=>{
                   return action.payload!==ind
            })) 
            return result;
         }
}
const Dashboard=()=>{
           const data=[{name:"nani",age:25,email:"nani@gmail.com"},
               {name:"nani",age:25,email:"nani@gmail.com"},
               {name:"nani",age:25,email:"nani@gmail.com"},
               {name:"nani",age:25,email:"nani@gmail.com"}]

            const [state,dispatch]=useReducer(reduce,data)
            const btnfun=(index)=>{
                     dispatch({type:"delete",payload:index})
            }
          return(
            <div>
              <h1> this is  Dashboard </h1>
              <table>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>Email</th>
                </tr>
                {
                    state.map((ele,ind)=>{
                    return(
                        <tr>
                        <td>{ele.name}</td>
                        <td>{ele.age}</td>
                        <td>{ele.email}</td>
                        <button onClick={()=>{btnfun(ind)}}>del</button>
                    </tr>
                    )
                    }  )
                }
              </table>

            </div>
          )
}
export default Dashboard;