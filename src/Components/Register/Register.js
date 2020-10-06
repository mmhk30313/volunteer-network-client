import React from 'react';
import './Register.css';
import logo from '../../logos/Group 1329.png';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Register = () => {
    const {id} = useParams();
    const history = useHistory();
    const [task, setTask] = useState({});
    useEffect(()=>{
        fetch(`https://myherokuvolunteers.herokuapp.com/network/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setTask(data);
        })
    }, [])
    const handleSubmit = (user) =>{
        user.preventDefault();
        const volunteer = {
            name: user.target.name.value,
            email: user.target.email.value,
            date: user.target.date.value,
            description: user.target.description.value,
            eventTitle: user.target.eventTitle.value
        }
        const newUserTask = {...volunteer};
        newUserTask.imgSrc = task.imageSrc;
        fetch('https://myherokuvolunteers.herokuapp.com/addUser', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(newUserTask)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            history.push(`/event-tasks?email=${data.email}`);
        })
    }
    return (
        <div className='jumbotron full-page text-center'>
            <img className='logo-img' src={logo} alt=""/>
            <form onSubmit={handleSubmit} className="form-control register-form">
                <p>Register as a Volunteer</p>
                <input type='name' className='user-input' placeholder='Full Name' name="name" required/><br/>
                <input className='user-input' placeholder='Email' type="email" name='email' required/><br/>
                <input type='date' name='date' className='user-input' defaultValue={new Date().toLocaleDateString('EN-GB')}  placeholder='Date' name="date" required/><br/>
                <input type='text' name='text' className='user-input' placeholder='Description' defaultValue='Description' name="description" required/><br/>
                <input type='text' className='user-input' defaultValue={task.taskName} placeholder='eventTitle books at the library' name="eventTitle" required/><br/>   
                <button type="submit" className='user-input btn btn-primary'>Registration</button>
            </form>
        </div>
    );
};

export default Register;