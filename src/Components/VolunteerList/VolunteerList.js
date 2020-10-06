import React, { useEffect, useState } from 'react';
import List from './List';
import './VolunteerList.css';
const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() =>{
        fetch(`https://myherokuvolunteers.herokuapp.com/events`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setVolunteers(data);
        })
    },[]);

    const handleDeleteVolunteer = (userID) => {
        // console.log(userID);
        const newUsers = volunteers.filter(v => v._id !== userID);
        fetch(`https://myherokuvolunteers.herokuapp.com/delete/${userID}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.deletedCount > 0){
                setVolunteers(newUsers);
            }
        })
    }
    return (
        <div className='jumbotron list-page'>
            <div className="bg-light rounded list-page">
                <div className="title row">
                    <p className="col-md-2">Name</p>
                    <p className="col-md-2">Email ID</p>
                    <p className="col-md-2">Register date</p>
                    <p className="col-md-2">Volunteer list</p>
                    <p className="col-md-2">Action</p>
                </div>
                {
                    volunteers.map(v => <List key={v._id} volunteer={v}handleDeleteVolunteer={handleDeleteVolunteer}/>)
                }
            </div>
        </div>
    );
};

export default VolunteerList;