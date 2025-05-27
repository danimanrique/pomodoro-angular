# 🍅 Pomodoro Timer

Una aplicación moderna de temporizador Pomodoro construida con Angular, diseñada para ayudarte a mantener el enfoque y mejorar tu productividad.

## ✨ Características

### ⏲️ Gestión del Tiempo
- Temporizador Pomodoro configurable
- Modos predefinidos:
  - Pomodoro (25 min)
  - Descanso corto (5 min)
  - Descanso largo (15 min)
- Control de reproducción (Iniciar, Pausar, Reiniciar)
- Notificación sonora al finalizar cada sesión

### 📝 Sistema de Tareas
- Creación y gestión de tareas
- Estimación de pomodoros por tarea
- Seguimiento del progreso
- Marcado de tareas completadas
- Eliminación de tareas

### ⚙️ Personalización
- Tiempos ajustables para cada modo:
  - Duración del Pomodoro
  - Duración del descanso corto
  - Duración del descanso largo
- Persistencia de configuración en localStorage

### 🎨 Temas de Color
- 6 temas predefinidos:
  - Verde (por defecto)
  - Azul
  - Morado
  - Rojo
  - Naranja
  - Rosa
- Persistencia del tema seleccionado

### 📱 Diseño Responsive
- Interfaz adaptativa para todos los dispositivos
- Diseño optimizado para móviles
- Transiciones y animaciones suaves

## 🛠️ Tecnologías

- **Angular 17**: Framework principal
- **PrimeNG**: Biblioteca de componentes UI
- **PrimeFlex**: Sistema de grid y utilidades CSS
- **TypeScript**: Lenguaje de programación
- **SCSS**: Preprocesador CSS
- **LocalStorage**: Persistencia de datos

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/pomodoro-timer.git
```

2. Instala las dependencias:
```bash
cd pomodoro-timer
npm install
```

3. Inicia el servidor de desarrollo:
```bash
ng serve
```

4. Abre tu navegador en `http://localhost:4200`

## 📦 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── pomodoro/        # Componente principal del timer
│   │   ├── task-modal/      # Modal de gestión de tareas
│   │   └── settings-modal/  # Modal de configuración
│   ├── models/             # Interfaces y tipos
│   └── services/          # Servicios compartidos
├── assets/
│   └── alarm.mp3         # Sonido de notificación
└── styles/              # Estilos globales
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
