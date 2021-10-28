import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      //console.log(v);
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggleEdit(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.editing = !v.editing;
      //console.log(v);
    });
  }

  // saveEditTodo(idx: number, text: string){
  //   this.todos[idx] ={"content" : text, "completed": false, "editing" : false}
  // }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
        editing: false,
      },
      {
        content: 'Second todo',
        completed: false,
        editing: false,
      },
    ];
  }
}
