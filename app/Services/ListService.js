import _store from "../store.js";
import Item from "../Models/Item.js";
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

  deleteList(id) {
    let foundList = _store.State.lists.findIndex(list => list.id == id);
    console.log(foundList);
    _store.State.lists.splice(foundList, 1);
    _store.saveState();
  }

  addItem(itemData) {
    let item = new Item(itemData);
    let foundList = _store.State.lists.find(list => list.id == item.listId);
    foundList.items.push(item);
    _store.saveState();
  }

  deleteItem(listId, itemId) {
    debugger;
    let foundList = _store.State.lists.find(list => listId.id == listId);
    foundList.items = foundList.items.filter(item => item.id != itemId);
    _store.saveState();
  }
  constructor() {
    console.log("Hello from ListService");
  }
}

const SERVICE = new ListService();
export default SERVICE;
