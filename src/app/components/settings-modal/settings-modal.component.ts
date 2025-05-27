import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TimerSettings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

@Component({
  selector: 'app-settings-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveSettings = new EventEmitter<TimerSettings>();

  settings: TimerSettings = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15
  };

  ngOnInit() {
    // Cargar configuración guardada
    const savedSettings = localStorage.getItem('timerSettings');
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
    }
  }

  save() {
    localStorage.setItem('timerSettings', JSON.stringify(this.settings));
    this.saveSettings.emit(this.settings);
    this.close();
  }

  close() {
    this.closeModal.emit();
  }
} 