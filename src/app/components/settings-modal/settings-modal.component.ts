import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { themeColors } from '../../themes';
import { ThemeColor } from '../../models/theme-color.interface';
import { applyTheme } from '../../shared/applyTheme';
import { ButtonModule } from 'primeng/button';

interface TimerSettings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

@Component({
  selector: 'app-settings-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveSettings = new EventEmitter<TimerSettings>();
  public themeColors: ThemeColor[] = themeColors;

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

  applyTheme(theme: ThemeColor) {
    applyTheme(theme);
  }
} 