import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

const Home=()=>{
    const [movie,setMovie]=useState('');
    const[result,setResult]=useState([]);
    const changefun=(e)=>{
            setMovie(e.target.value);
    }
    const subhandler=(e)=>{
             e.preventDefault();
             fetch(`https://www.omdbapi.com/?s=${movie}&apikey=43c0157d`).then((res)=>res.json()).then((res1)=>{setResult(res1.Search)})
             
    }
          return(
            <div>
             
             <center>
             <h1>Movie Search</h1>
             <form onSubmit={subhandler}>
             <input type="text" value={movie} onChange={changefun}/>
             <input type="submit"/>
             </form>
             </center>
             <div className="row">
                   {  result.map((ele)=>
                   <div className="col-md-3">
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={ele.Poster} />
                      <Card.Body>
                        <Card.Title>{ele.Title}</Card.Title>
                        <Card.Text>
                          this {ele.Type} was released in the year {ele.Year}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </div>
                
                   
                             
                   )
                   }
             </div>
            </div>
          )
}
export default Home;