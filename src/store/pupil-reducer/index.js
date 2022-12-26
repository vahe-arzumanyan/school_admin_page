import {toDoActions} from "../type-reducer/type";

const initialState = {
  pupilList: []
}

const Pupil = (state = initialState, action) => {
  switch (action.type) {
    case toDoActions.CREATE_LIST: {

      return {...state, pupilList: [...state.pupilList, action.payload]}
    }
    case toDoActions.REMOVE_LIST: {
      return {...state, pupilList: state.pupilList.filter((item, i) => i !== action.payload)}
    }
    case toDoActions.EDIT_LIST: {

      console.log(action.payload)
      const newList = state.pupilList.map((item, i) => {
        if (action.payload.index === i) {
          item = action.pupilList.userEdit
        }
        return item
      })


      return {
        ...state, pupilList: newList
      }
    }


    default: {
      return {...state}
    }

  }

}

export default Pupil;

// export const removeList = (index)=>{
//     return{type:toDoActions.REMOVE_LIST, payload:index}
// }