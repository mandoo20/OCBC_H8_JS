import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo-reactive-form',
  templateUrl: './add-todo-reactive-form.component.html',
  styleUrls: ['./add-todo-reactive-form.component.css'],
})
export class AddTodoReactiveFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  addTodoForm = new FormGroup({
    inputTodo: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      // Validators.pattern("^[a-zA-Z]$"),
    ]),
  });

  get inputTodo() {
    return this.addTodoForm.get('inputTodo');
  }
  isSubmitted = false;

  handleIsSubmittedState () {
    if(this.isSubmitted === true)
      this.isSubmitted = false
  }

  addTodo() {

    this.isSubmitted = true;
    if(!this.addTodoForm.invalid) {
      this.isSubmitted = false;
      const todo: Todo = {
        content: this.addTodoForm.get('inputTodo')?.value,
        completed: false,
        editing: false,
      };
      this.newTodoEvent.emit(todo);
    }
    this.addTodoForm.reset();
  }

  ngOnInit(): void {}
}
