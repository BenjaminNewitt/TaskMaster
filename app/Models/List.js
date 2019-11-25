import Item from "./Item.js";
import { generateId } from "../utils.js";

export default class List {
  constructor({ id = generateId(), name, items }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id;
    this.name = name;
    this.items = items.map(i => new Item(i));
    // TODO add list items
  }
  //Be sure to add the methods needed to create the view template for this model
  // TODO add HTML
  get template() {
    return /* html */ `<div class="col-10 m-auto col-sm-6 border rounded text-left d-inline-block bg-light text-dark">
  
    <button class="btn btn-sm btn-danger float-right" onclick="app.listsController.deleteList('${
      this.id
    }')">X</button>
    <p class="m-1">${this.name}</p>
  

    <ul>${this.drawItems()}</ul>


    <form class="form-inline-block" onsubmit="app.listsController.addItem(event, '${
      this.id
    }')">
      <div class="form-group">
        <input
          type="text"
          name="name"
          class="form-control input-sm m-1"
          id="name"
          placeholder="enter item here..."
          required
        />
        <button type="submit" class="btn btn-primary btn-sm m-1">+</button>
      </div>
    </form>
  </div>
    `;
  }

  drawItems() {
    let template = "";
    this.items.forEach(item => (template += item.template));
    return template;
  }

  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
