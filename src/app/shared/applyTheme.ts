import { ThemeColor } from "../models/theme-color.interface";

export function applyTheme(theme: ThemeColor) {
    const currentTheme = theme;
    document.documentElement.style.setProperty('--primary-gradient-start', theme.primary);
    document.documentElement.style.setProperty('--primary-gradient-end', theme.secondary);
    document.documentElement.style.setProperty('--theme-text-color', theme.textColor);
    document.body.style.background = `linear-gradient(135deg, var(--primary-gradient-start) 0%, var(--primary-gradient-end) 100%)`;
    localStorage.setItem('themeColor', JSON.stringify(theme));
  }