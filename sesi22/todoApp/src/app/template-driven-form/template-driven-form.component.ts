import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../models/task';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  tasks : Task[] = []
  categories: string [] = ['School', 'Work', 'Hobby']

  

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const {taskName,category} = form.value
    this.tasks.push(new Task(taskName,"incomplete",category))
    form.reset()
  }

}
