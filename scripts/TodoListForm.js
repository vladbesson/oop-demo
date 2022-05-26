class TodoListForm {
  static template = document.querySelector('#todolist-form-template').content;

  constructor(addItem) {
    this._addItem = addItem;
  }

  _submitHandler = (evt) => {
    evt.preventDefault();

    const input = this._view.querySelector('.todolist-form_input');
    const text = input.value;

    this._addItem(text);

    input.value = '';
  }

  render = (container) => {
    this._view = TodoListForm.template.cloneNode(true).children[0];
    this._view.addEventListener('submit', this._submitHandler)
    container.append(this._view);
  }
}
