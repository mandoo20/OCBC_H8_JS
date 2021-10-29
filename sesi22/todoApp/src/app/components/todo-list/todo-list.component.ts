import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Output() comTodoEvent = new EventEmitter<Todo>();

  todos: Todo[] = [];
  completedTodo : Todo[]=[];

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      //console.log(v);
    });
  }

  deleteTodo(content : string, id : number) {
    const comTodo: Todo = {
      content: content,
      completed: true,
      editing: false,
    };
    this.comTodoEvent.emit(comTodo);


    this.completedTodo.push(comTodo);
    this.todos = this.todos.filter((v, i) => i !== id);

  }

  deleteCompleteTodo(id: number) {
    this.completedTodo = this.completedTodo.filter((v, i) => i !== id);
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
