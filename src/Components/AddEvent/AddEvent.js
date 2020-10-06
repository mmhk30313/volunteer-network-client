import React from 'react';
import uploadLogo from '../../logos/cloud-upload-outline 1.png';
import './AddEvent.css';
const AddEvent = () => {
    const handleSubmit = (newEvent) =>{
        newEvent.preventDefault();
        //Its only for downloaded image in same folder of client server(../../images)

        console.log((newEvent.target.uploadImage.value));
        const split_image_path = newEvent.target.uploadImage.value;
        // console.log(split_image_path.replace(/[\/\\]/g,' '))
        const split_path = split_image_path.replace(/[\/\\]/g,' ').split(' ');
        const event = {
            taskName: newEvent.target.event.value,
            date: newEvent.target.date.value,
            description: newEvent.target.description.value,
            bgColor: "orangered",
            imageSrc: split_path[split_path.length - 1],
        }
        console.log(event);
        fetch(`https://myherokuvolunteers.herokuapp.com/addNetwork`,{
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(event)
        })
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className='jumbotron list-page'>
            {/* <h1 className='text-center'>This is add event</h1> */}
            <form onSubmit={handleSubmit} action="" className='row justify-content-center form-control admin-form' id='useForm'>
                <input type="text" rows="4" cols="50" className='col-md-5 input' placeholder='Enter Title' name='event' required/>
                <input type="date" className='col-md-5 input' name='date' required/>
                <textarea type="text"  rows="4" cols="50" className='col-md-5 input' placeholder='Enter Description' name='description' required/>
                {/* It will be hidden & htmlFor is label */}
                <input type="file" className='col-md-5 input-image input' name="uploadImage" id="img" accept="image/png, image/jpeg, image/jpg" required/>
                <label className='btn btn-outline-success col-md-5 input label-input' htmlFor="img"><img src={uploadLogo} style={{height: '30px'}} alt="U+"/> Upload image</label>
            </form>
            <div className="d-flex justify-content-end">
                <button className='btn btn-primary' type='submit' form="useForm">Submit</button>    
            </div>
        </div>
    );
};

export default AddEvent;