import { ADD_TASK } from "../Constants/action-types";
import { DELETE_TASK } from "../Constants/action-types";
import { CHECK_TASK } from "../Constants/action-types";
import { UNCHECK_TASK } from "../Constants/action-types";
import { FILTER_TASKS } from "../Constants/action-types";
import { UNFILTER_TASKS } from "../Constants/action-types";

export const addTask = newTask => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const deleteTask = newTask => {
    return {
        type: DELETE_TASK,
        payload: newTask
    }
}

export const checkTask = newPost => {
    return {
        type: CHECK_TASK,
        payload: newPost
    }
}

export const uncheckTask = newPost => {
    return {
        type: UNCHECK_TASK,
        payload: newPost
    }
}

export const filterTasks = tasks =>{
    return {
        type : FILTER_TASKS,
        payload: tasks
    }
}

export const unfilterTasks = {
        type : UNFILTER_TASKS
}