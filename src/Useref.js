import React ,{useRef}from 'react'
const Useref=()=>{
    const data=useRef(null);
    const funsub=(e)=>{
        e.preventDefault();
        console.log(data.current.value)
    }
    return(
        <div>
            <form onSubmit={funsub}>
                <input type="text" ref={data}/>
                <input type="submit"/>
                </form>
                
        </div>
    )
}
export default Useref;