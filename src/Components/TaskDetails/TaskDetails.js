import React from 'react';
import './TaskDetails.css';
const TaskDetails = ({task, handleTaskDelete}) => {
    // console.log(task);
    const {name, imgSrc, eventTitle, date} = task;
    let abbrUserName = "";
    if(name){
        const abbrName = name.toUpperCase();
        const split_names = abbrName.split(" ");
        for (let i = 0; i < split_names.length; i++) {
            const s = split_names[i].charAt(0);
            abbrUserName += s;
        }
        // abbr.toUpperCase();
    }
    return (
        <div className='col-sm-4 col-md-5 border border-warning bg-light rounded task-card' style={{margin: '5px',padding: '10px',height: 'fit-content !important'}}>
            <div className="row justify-content-between">
                <div className='col-md-4'>
                    <img className='task-img' src={require(`../../images/${imgSrc}`)} alt="Sorry!! Please upload an image from (../../images) path after downloading"/>
                </div>
                <div className='col-md-8 text-end'>
                    <h6>{eventTitle}</h6>
                    <p>{date}</p><br/><br/>
                    <div className='row justify-content-around'>
                        <p className='text-warning col-md-5'>By: <span className='text-success'>{abbrUserName}</span></p>
                        <button onClick={() => handleTaskDelete(task._id)} className='btn btn-outline-dark cancel col-md-4'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;