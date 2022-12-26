import {toDoActions} from "./type";

const initialState = {
  userList: []
}

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case toDoActions.CREATE_TO_DO: {

      return {...state, userList: [...state.userList, action.payload]}
    }
    case toDoActions.REMOVE_LIST: {
      return {...state, userList: state.userList.filter((item, i) => i !== action.payload)}
    }
    case toDoActions.EDIT_LIST: {

      console.log(action.payload)
      const newList = state.userList.map((item, i) => {
        if (action.payload.index === i) {
          item = action.payload.userEdit
        }
        return item
      })


      return {
        ...state, userList: newList
      }
    }


    default: {
      return {...state}
    }

  }

}

export default TodoListReducer;

// export const removeList = (index)=>{
//     return{type:toDoActions.REMOVE_LIST, payload:index}
// }