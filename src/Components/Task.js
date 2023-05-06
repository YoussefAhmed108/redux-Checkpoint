import { useState } from "react";
import { checkTask, deleteTask, uncheckTask } from "../Actions/action";
import"../App.css";
import { useDispatch } from "react-redux";
import { Button } from "bootstrap";
const Task = ({index,task}) =>{

    const circleStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '2px solid grey',
        backgroundColor: task.done ? "green" : "red",
        cursor:"pointer"
    };
    const [checked,setChecked] = useState(false);
    const dispatch = useDispatch();
    const handleClick = (e) => {
      e.preventDefault()
      dispatch(deleteTask(task))    
  }
    const check = () =>{
      if(!checked){
        setChecked(true)
        dispatch(checkTask(task))
      }else{
        setChecked(false)
        dispatch(uncheckTask(task))
      }
      
    }
      return (
        <div className="rectangle">
          <div onClick={check} style={circleStyle}></div>
          <div className="text"> {task.title}</div>
          <button type="button" class="btn btn-danger" onClick={handleClick}>Delete</button>
        </div>
      );
}

export default Task;  