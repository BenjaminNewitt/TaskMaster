import { generateId } from "../utils.js";

export default class List {
  constructor(id = generateId(), name) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id;
    this.name = name;
    // TODO add list items
  }
  //Be sure to add the methods needed to create the view template for this model
  // TODO add HTML
  get template() {
    return;
  }

  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
