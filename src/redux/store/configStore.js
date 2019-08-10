import {createStore} from "redux";
import reducer from '../reducer'

const initalState={
  title:''
};
const configStore=()=>createStore(reducer,initalState);

export default configStore;