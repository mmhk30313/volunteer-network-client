import React, { useState } from 'react';
import logo from '../../logos/Group 1329.png';
import plus from '../../logos/plus 1.png';
import user from '../../logos/users-alt 1.png';
import './Admin.css';
import VolunteerList from '../VolunteerList/VolunteerList';
import AddEvent from '../AddEvent/AddEvent';
const Admin = () => {
    const [event, setEvent] = useState("volunteerEvent");
    
    return (
        <div className='jumbotron full-page'>
            <br/><br/>
            <div className="row bg-light">
                <div className="col-md-3">
                    <img src={logo} className='admin-logo' alt=""/><br/><br/>
                    <p onClick={() => setEvent("volunteerEvent")} className='p-link' style={{color: event!=="volunteerEvent" ? '#207FEE' : ' #1212dc'}}><img src={user} className='user-logo' alt=""/> Volunteer register list</p>
                    <p onClick={() => setEvent("event")} className='p-link' style={{color: event!=="event" ? '#207FEE' : ' #1212dc'}}><img src={plus} className='plus-logo' alt=""/> Add event</p>
                </div>
                {
                    event==="volunteerEvent" 
                    ? <div className="col-md-9">
                        <h6 style={{marginTop: '15px',paddingLeft: '25px'}}>Volunteer Register List</h6>
                        <VolunteerList/>
                    </div>
                    : <div className="col-md-9">
                        <h6 style={{marginTop: '15px',paddingLeft: '25px'}}>Add Event</h6>
                        <AddEvent/>
                    </div>
                }
                {/* <div className="col-md-9">
                    <h5 style={{marginTop: '15px'}}>Volunteer register list</h5>
                    <VolunteerList/>
                </div> */}
            </div>
        </div>
    );
};

export default Admin;