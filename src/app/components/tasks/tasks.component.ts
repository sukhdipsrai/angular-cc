import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {TaskService} from '../../servcies/task.service'
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((taskData)=>{
      this.tasks = taskData;
    });
  }

}
