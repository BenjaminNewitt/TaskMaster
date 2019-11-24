import { generateId } from "../utils.js";

export default class Item {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name;
  }

  get template() {
    return `
    <li>${this.name}<button class="btn btn-sm btn-outline-transparent text-danger justify-content-end" type="button" onclick="app.listsController.deleteItem('${this.listId}', '${this.id}')">X</button></li>
    `;
  }
}
