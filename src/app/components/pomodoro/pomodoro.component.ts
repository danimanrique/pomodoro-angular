import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { SettingsModalComponent } from '../settings-modal/settings-modal.component';

interface TimerSettings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

interface ThemeColor {
  name: string;
  primary: string;
  secondary: string;
  textColor: string;
}

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SelectButtonModule,
    DropdownModule,
    OverlayPanelModule,
    TaskModalComponent,
    SettingsModalComponent
  ],
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnDestroy, OnInit {
  minutes: number = 25;
  seconds: number = 0;
  isRunning: boolean = false;
  timer: any;
  currentMode: 'pomodoro' | 'shortBreak' | 'longBreak' = 'pomodoro';
  isTaskModalOpen: boolean = false;
  isSettingsModalOpen: boolean = false;
  currentTheme?: ThemeColor;

  themeColors: ThemeColor[] = [
    { name: 'Verde', primary: '#2c7744', secondary: '#2a9d8f', textColor: '#2c7744' },
    { name: 'Azul', primary: '#1a73e8', secondary: '#4285f4', textColor: '#1a73e8' },
    { name: 'Morado', primary: '#6200ee', secondary: '#9c27b0', textColor: '#6200ee' },
    { name: 'Rojo', primary: '#d32f2f', secondary: '#f44336', textColor: '#d32f2f' },
    { name: 'Naranja', primary: '#ed6c02', secondary: '#ff9800', textColor: '#ed6c02' },
    { name: 'Rosa', primary: '#c2185b', secondary: '#e91e63', textColor: '#c2185b' }
  ];

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
      this.minutes = this.settings.pomodoro;
    }

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('themeColor');
    if (savedTheme) {
      this.applyTheme(JSON.parse(savedTheme));
    } else {
      // Aplicar tema por defecto (Verde)
      this.applyTheme(this.themeColors[0]);
    }
  }

  toggleTaskModal() {
    this.isTaskModalOpen = !this.isTaskModalOpen;
  }

  toggleSettingsModal() {
    this.isSettingsModalOpen = !this.isSettingsModalOpen;
  }

  updateSettings(newSettings: TimerSettings) {
    this.settings = newSettings;
    this.resetTimer();
  }

  toggleTimer() {
    if (this.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.isRunning = true;
    this.timer = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else if (this.minutes > 0) {
        this.minutes--;
        this.seconds = 59;
      } else {
        this.playAlarm();
        this.pauseTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.timer);
  }

  resetTimer() {
    this.pauseTimer();
    this.setMode(this.currentMode);
  }

  setMode(mode: 'pomodoro' | 'shortBreak' | 'longBreak') {
    this.currentMode = mode;
    this.pauseTimer();
    
    switch (mode) {
      case 'pomodoro':
        this.minutes = this.settings.pomodoro;
        break;
      case 'shortBreak':
        this.minutes = this.settings.shortBreak;
        break;
      case 'longBreak':
        this.minutes = this.settings.longBreak;
        break;
    }
    this.seconds = 0;
  }

  playAlarm() {
    const audio = new Audio('assets/alarm.mp3');
    audio.play();
  }

  applyTheme(theme: ThemeColor) {
    this.currentTheme = theme;
    document.documentElement.style.setProperty('--primary-gradient-start', theme.primary);
    document.documentElement.style.setProperty('--primary-gradient-end', theme.secondary);
    document.documentElement.style.setProperty('--theme-text-color', theme.textColor);
    document.body.style.background = `linear-gradient(135deg, var(--primary-gradient-start) 0%, var(--primary-gradient-end) 100%)`;
    localStorage.setItem('themeColor', JSON.stringify(theme));
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
