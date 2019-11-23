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
    return /* html */ `<div class="col-12 col-sm-6 col-md-4 m-3 p-3 border rounded text-left d-inline-block">
  
    <button class="btn btn-sm btn-outline-danger justify-content-end" onclick="app.listsController.deleteList('${
      this.id
    }')">X</button>
    <p class="m-1">${this.name}</p>
  

    <ul>${this.drawItems()}</ul>


    <form class="form-inline" onsubmit="app.listsController.addItem(event, '${
      this.id
    }')">
      <div class="form-group mb-2">
        <input
          type="text"
          name="name"
          class="form-control d-inline-block"
          id="name"
          placeholder="enter item here..."
        />
      </div>
  <button type="submit" class="btn btn-primary mb-2">+</button>
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
