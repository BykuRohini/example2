import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home=()=>{
         const [data,setData]=useState('');
         const [result,setResult]=useState([]);
         const ChangeHandler=(e)=>{
                  setData(e.target.value)
         }
         const subHandler=(e)=>{
                   e.preventDefault();
                   fetch(`https://www.omdbapi.com/?s=${data}&apikey=43c0157d`).then((res)=>res.json()).then((res2)=>(setResult(res2.Search)))
         }
          return(
            <div>
                  <center>
                   <h1>Movie Search </h1>
                   <form onSubmit={subHandler}>
                    <input type="text" value={data} onChange={ChangeHandler}/><br/>
                    <input type="submit" value="submit"/>

                   </form>
                  </center>

                  <div className="row">
                  
                    {result.map((ele,ind)=>
                        <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ele.Poster} />
                        <Card.Body>
                          <Card.Title>{ele.Title}</Card.Title>
                          <Card.Text>
                          this {ele.Type} was released on {ele.Year}
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