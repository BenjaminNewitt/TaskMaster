import _store from "../store.js";
import List from "../Models/List.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(listData) {
    console.log("ADDING FROM LIST SERVICE");
    let list = new List(listData);
    _store.State.lists.push(list);
    _store.saveState();
  }
  constructor() {
    console.log("Hello from ListService");
  }
}

const SERVICE = new ListService();
export default SERVICE;
