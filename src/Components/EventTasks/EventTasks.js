import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import TaskDetails from '../TaskDetails/TaskDetails';
const EventTasks = () => {
    const [tasks, setTasks] = useState([]);
    const location = useLocation();
    const queryEmail = queryString.parse(location.search);
    // console.log(queryEmail);
    const {email} = queryEmail;
    // console.log(email)
    useEffect(() =>{
        fetch(`https://myherokuvolunteers.herokuapp.com/tasks?email=${email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setTasks(data)
        })
        .catch(err => console.log(err))
    },[])

    const handleTaskDelete = (id) =>{
        // console.log(id);
        // Temporary Delete...Task
        const newUserTasks = tasks.filter(task => task._id !== id);
        // Permanent Delete...Task
        fetch(`https://myherokuvolunteers.herokuapp.com/delete/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.deletedCount > 0){
                setTasks(newUserTasks);
            }
        })
        // console.log(newUserTasks);
        
    }
    return (
        <div className='jumbotron full-page'>
            {/* <p className='text-center'>This is event tasks</p> */}
            <br/><br/>
            <div className="row justify-content-center">
                {
                    tasks.map(task => <TaskDetails key={task._id} task={task} handleTaskDelete={handleTaskDelete}></TaskDetails>)
                }
            </div>
        </div>
    );
};

export default EventTasks;