import ListService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = _store.Lists;
  lists.forEach(list => (template += list.template));
  document.querySelector("#lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    console.log("Hello from ListController");
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      id: "",
      name: formData.name.value,
      items: []
    };
    ListService.addList(newList);
    formData.reset();

    _drawLists();
    console.log("ADDING FROM CONTROLLER");
  }

  deleteList(id) {
    ListService.deleteList(id);
    _drawLists();
  }

  addItem(event, listId) {
    event.preventDefault();
    let formData = event.target;

    let newItem = {
      id: "",
      name: formData.name.value,
      listId
    };
    ListService.addItem(newItem);
    formData.reset();
    _drawLists();
  }

  deleteItem(listId, itemId) {
    ListService.deleteItem(listId, itemId);
    _drawLists();
  }
}
