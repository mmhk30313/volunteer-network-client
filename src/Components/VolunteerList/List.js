import React from 'react';
import delete_logo from '../../logos/trash-2 9.png';
import './VolunteerList.css';
const List = ({volunteer, handleDeleteVolunteer}) => {
    // console.log(volunteer);
    const {_id, date, name, email, eventTitle} = volunteer;
    const split_email = email.replaceAll('.',' ');
    return (
        <div className='title bg-light row'>
            <p className="col-md-2">{name}</p>
            <p className="col-md-2">{split_email.replaceAll('@g',' @g')}</p>
            <p className="col-md-2">{date}</p>
            <p className="col-md-2">{eventTitle}</p>
            <p onClick={() => handleDeleteVolunteer(_id)} className="col-md-2"><img src={delete_logo} style={{height: '40px',borderRadius: '5px',backgroundColor: 'orangered',padding: '5px',cursor: 'pointer'}} alt=""/></p>
        </div>
    );
};

export default List;