import { Component } from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent {
  task: string = '';
  onSentData(event: any) {
    return this.task = event.target.value;
  }

  onSubmit() {
    console.log(this.task);
  }
}
