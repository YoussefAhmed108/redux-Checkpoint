import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import Task from './Task'
import { filterTasks, unfilterTasks } from '../Actions/action'
import { useState } from 'react'
import { base } from '../Reducer/rootReducer'

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const ListTask = (props) => {
    const [filtered,setFiltered] = useState(false)
    const dispatch = useDispatch();
    const filter = (e) => {
        if(!filtered){
            setFiltered(true)
            dispatch(filterTasks(props.tasks))
        }
            
        else{
            setFiltered(false)
            dispatch(unfilterTasks)
        }
           
    }
    console.log("HERE", props.tasks);
    return (
            <div className='tasks'>
                <button onClick={filter}> {!filtered? "Remove done tasks": "Filter undone"}</button>
                {props.tasks.map((task, index) => 
                    <Task key={index} task={task}/>
                )}
             </div>
    )
}



export default connect(mapStateToProps)(ListTask)