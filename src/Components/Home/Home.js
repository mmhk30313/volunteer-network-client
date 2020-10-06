import React, { useEffect, useState } from 'react';
import Volunteers from '../Volunteers/Volunteers';
import './Home.css';
const Home = () => {
    const [volunteers,setVolunteers] = useState([]);
    useEffect(()=> {
        fetch('https://myherokuvolunteers.herokuapp.com/network')
        .then(res => res.json())
        .then(data => setVolunteers(data))
    },[])
    return (
        <div className="my-nav">
            <form action="" className='text-center text-dark form'>
                <h4 className='text-uppercase' style={{}}>I grow by helping people in need.</h4>
                <input type="text" className='form-control input' placeholder='search...'/>
                <input className='btn btn-primary' label='Search' type="submit" value="Submit"/>
            </form><br/><br/><br/><br/><br/>
            <div className="jumbotron deck">
                
            </div>
            <div className="row my-deck">
                {
                    volunteers.map(volunteer => <Volunteers key={volunteer._id} eventTitle={volunteer}/>)
                }
            </div>
        </div>
    );
};

export default Home;