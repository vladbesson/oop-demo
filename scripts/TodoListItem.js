class TodoListItem {
  static template = document.querySelector('#todolist-item-template').content;

  constructor(text) {
    this._text = text;
  }

  _deleteClickHandler = () => {
    this._view.remove();
  }

  render = (container) => {
    this._view = TodoListItem.template.cloneNode(true).children[0];
    this._view.querySelector('.todolist-item__text').textContent = this._text;

    this._view.querySelector('.todolist-item__del').addEventListener('click', this._deleteClickHandler);

    container.append(this._view);
  }
}
