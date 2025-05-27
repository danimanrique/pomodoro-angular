import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  pomodorosCompleted: number;
  estimatedPomodoros: number;
}

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  
  tasks: Task[] = [];
  newTaskTitle = '';
  estimatedPomodoros = 1;

  close() {
    this.closeModal.emit();
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        completed: false,
        pomodorosCompleted: 0,
        estimatedPomodoros: this.estimatedPomodoros
      };
      
      this.tasks.push(newTask);
      this.newTaskTitle = '';
      this.estimatedPomodoros = 1;
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  increaseEstimate() {
    if (this.estimatedPomodoros < 10) {
      this.estimatedPomodoros++;
    }
  }

  decreaseEstimate() {
    if (this.estimatedPomodoros > 1) {
      this.estimatedPomodoros--;
    }
  }
} 