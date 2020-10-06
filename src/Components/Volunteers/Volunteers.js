import React from 'react';
import Card from 'react-bootstrap/Card';
import fakeLogo from '../../images/extraVolunteer.png';
import { Link } from 'react-router-dom';
import './Volunteers.css';
const Volunteers = ({eventTitle}) => {
    // console.log(eventTitle)
    const {_id, imageSrc, taskName, bgColor, oldEvent} = eventTitle;
    return (
        <Link to={`/register/${_id}`} className='col-md-3 col-sm-6 my-card'>
            <Card className='card'>
                <Card.Img variant="top" src={!oldEvent ?  require(`../../images/${imageSrc}`): fakeLogo} alt='Sorry! Please upload img from (../../ images) path after downloading' />
                <Card.Text style={{backgroundColor: bgColor}} id='card-text'>
                    {taskName}
                </Card.Text>
            </Card>
        </Link>
    );
};

export default Volunteers;