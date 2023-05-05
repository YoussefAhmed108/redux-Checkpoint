import { useState } from "react";
import { checkTask, uncheckTask } from "../Actions/action";
import"../App.css";
import { useDispatch } from "react-redux";
const Task = ({index,task}) =>{

    const circleStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '2px solid grey',
        backgroundColor: task.done ? "green" : "red",
        cursor:"pointer"
    };
    const [checked,setChecked] = useState(true);
    const dispatch = useDispatch();
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
        </div>
      );
}

export default Task;  