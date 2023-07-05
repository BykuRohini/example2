import React,{useState} from 'react';
const Contact=()=>{
    const [data,setData]=useState({username:" ",password:" "})
    const {uname,pwd}=data;
    const changehandler=(e)=>{
          setData({...data,[e.target.name]:[e.target.value]})
    }
    const subhandler=(e)=>{
             e.preventDefault();
             console.log(data)
    }
    
    
          return(
           
            <div>
              <h1> this is  Contact </h1>
              <form onSubmit={subhandler}>
                <input type="text"  value={uname}name="username" onChange={changehandler}/><br/><br/>
                <input type="password" value={pwd}name="password" onChange={changehandler}/><br/>
                <input type="submit" />
              </form>
            </div>
          )
}
export default Contact;