import {toDoActions} from "../type-reducer/type";

const initialState = {
  teacherList: []
}

const Teacher = (state = initialState, action) => {
  switch (action.type) {
    case toDoActions.CREATE_LIST: {

      return {...state, teacherList: [...state.teacherList, action.payload]}
    }
    case toDoActions.REMOVE_LIST: {
      return {...state, teacherList: state.teacherList.filter((item, i) => i !== action.payload)}
    }
    case toDoActions.EDIT_LIST: {

      // console.log(action.payload)
      const newList = state.teacherList.map((item, i) => {
        if (action.payload.index === i) {
          item = action.payload.userEdit
        }
        return item
      })


      return {
        ...state, teacherList: newList
      }
    }


    default: {
      return {...state}
    }

  }

}

export default Teacher;

// export const removeList = (index)=>{
//     return{type:toDoActions.REMOVE_LIST, payload:index}
// }