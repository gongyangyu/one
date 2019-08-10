import {type} from "../action";

const breadcrumb=function (state,action) {
  switch (action.type) {
    case type.MENU_BREADCRUMB:
      return {
        ...state,
        titile:action.title
      }
    default:
      return {
      ...state
      }
  }
}
export default breadcrumb