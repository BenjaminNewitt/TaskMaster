import ListService from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    console.log("Hello from ListController");
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
