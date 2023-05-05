import { connect } from 'react-redux'
import { addTask } from '../Actions/action'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


const AddTask = props =>{
    const [title,setTitle] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("my name: "+title)
        const task = {
            id: Date.now(),
            title,
            done : false
        }
        dispatch(addTask(task))    
    }
    return (
        <div className='rectangle'>
            + Add Task
            <input type="text" onChange={e => setTitle(e.target.value)}/>
            <button  onClick={handleSubmit}></button> 
        </div>
    )
}

export default AddTask
