import { checkTask } from "../Actions/action"
import { FILTER_TASKS } from "../Constants/action-types"
import { UNFILTER_TASKS } from "../Constants/action-types"

export const ADD_TASK = 'ADD_TASK'
export const CHECK_TASK = 'CHECK_TASK'
export const UNCHECK_TASK = 'UNCHECK_TASK'
export const DELETE_TASK = 'DELETE_TASK'

const initialState = {
        tasks : [
            {
                id : 1,
                title : 'First Task',
                done : false
            }
        ]
}

export const base = {
    alltasks : [
        {
            id : 1,
            title : 'First Task',
            done : false
        }
    ]
}



export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const t = [...state.tasks, action.payload]
            base.alltasks = t
            return {
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        case CHECK_TASK:
            const newTasks =  state.tasks.map(task => {
                  if(task.id == action.payload.id){
                    return {
                        ...task,
                        done: true
                    }
                  }
                  return task

                })
            
            base.alltasks = newTasks
            return {tasks:newTasks}
            
        case UNCHECK_TASK:
            const changed =  state.tasks.map(task => {
                if(task.id == action.payload.id){
                  return {
                      ...task,
                      done: false
                  }
                }
                return task

              })
              base.alltasks = changed
            return{tasks:changed}
        case FILTER_TASKS:
            return{
                tasks : state.tasks.filter(task => !task.done)
            }
        case UNFILTER_TASKS:
            return{
                tasks : base.alltasks
            }        
        default:
            return state
    }
}