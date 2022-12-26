import {toDoActions} from '../type-reducer/type';

const initialState = {
  schoolList: []
}

const School = (state = initialState, action) => {
  switch (action.type) {
    case toDoActions.CREATE_LIST: {

      return {...state, schoolList: [...state.userList, action.payload]}
    }
    case toDoActions.REMOVE_LIST: {
      return {...state, schoolList: state.schoolList.filter((item, i) => i !== action.payload)}
    }
    case toDoActions.EDIT_LIST: {

      console.log(action.payload)
      const newList = state.schoolList.map((item, i) => {
        if (action.payload.index === i) {
          item = action.payload.userEdit
        }
        return item
      })


      return {
        ...state, schoolList: newList
      }
    }


    default: {
      return {...state}
    }

  }

}

export default School;

// export const removeList = (index)=>{
//     return{type:toDoActions.REMOVE_LIST, payload:index}
// }