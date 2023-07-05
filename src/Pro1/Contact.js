import React ,{useState}from 'react';
const Contact=()=>{
         const [data,setdata] =useState({username:" ",password:" "})
         const {username,password}=data;
         const changehandler=(e)=>{
                   setdata({...data,[e.target.name]:[e.target.value]})
         }
         const subhandler=(e)=>{
                    e.preventDefault();
                    console.log(data)
         }

          return(
            <div>
              <center><h1>this is Contact component</h1>
             <form onSubmit={subhandler}>
                <input type="text" value={username} name="username" onChange={changehandler}/><br/><br/>
                <input type="password" value={password} name="password" onChange={changehandler}/><br/><br/>
                <input type="submit" value="submit"/>
             </form>
             </center>
            </div>
             
          )
}
export default Contact;