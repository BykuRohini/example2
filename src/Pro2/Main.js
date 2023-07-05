import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Contact from './Contact';
import Nav from 'react-bootstrap/Nav';
import {useContext} from 'react';
import {Context} from './Usecontext';
const Main=()=>{
    const data =useContext(Context);
    return (
        <div>
          <BrowserRouter>
          <Nav>
         <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/About">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
                    <Nav.Link ><h2> Welcome  {data}</h2></Nav.Link>
       </Nav.Item>
      </Nav>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/About"} element={<About/>}/>
            <Route path={"/Dashboard"} element={<Dashboard/>}/>
            <Route path={"/Contact"} element={<Contact/>}/>

          </Routes>
          </BrowserRouter>
        </div>
    )
}
export default Main;