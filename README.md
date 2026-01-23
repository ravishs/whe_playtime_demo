# WHE Playtime Demo App

A modern, feature-rich web application built with Next.js 15, featuring a todos manager, contact form, and dynamic dark/light mode theming.

## Features

### 🎨 **Dark/Light Mode Toggle**
- Custom inverted color scheme for light mode
- Seamless theme switching with localStorage persistence
- Respects system preferences on first visit
- Tailwind CSS-based implementation

### ✅ **Todos Manager**
- Add, edit, and delete todos
- Mark todos as complete/incomplete
- Persistent storage using localStorage
- Full-width save button for easy access
- Responsive design

### 📧 **Contact Form**
- Name, email, and message fields
- Form validation
- Success message with auto-dismiss (3 seconds)
- Clean, user-friendly interface

### 🧭 **Navigation**
- Active page highlighting with blue accent
- Smooth transitions between pages
- Responsive navigation bar
- Accessible design with ARIA labels

### 🎯 **UI/UX Features**
- Pointer cursor on all interactive elements
- Consistent styling across all pages
- Footer with dynamic copyright year
- Wide content areas for better readability (max-width: 1280px)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript (React)
- **Font**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd whe_playtime
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
whe_playtime/
├── src/
│   ├── app/
│   │   ├── page.js           # Home page
│   │   ├── todos/
│   │   │   └── page.js       # Todos page
│   │   ├── contact/
│   │   │   └── page.js       # Contact page
│   │   ├── layout.js         # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navigation.js     # Navigation bar
│       └── Footer.js         # Footer component
├── public/                   # Static assets
└── package.json
```

## Key Components

### Navigation Component
- Dynamic active state based on current route
- Dark/light mode toggle with custom icons
- Responsive layout

### Todos Page
- CRUD operations for todo items
- localStorage integration
- Full-width save functionality

### Contact Page
- Form validation
- Success feedback
- Auto-clearing after submission

## Styling Features

### Custom CSS Rules
- Selective button inversion for proper color display in light mode
- Moon icon color adjustment for visibility
- Checkbox styling preservation during theme changes

### Color Scheme
- **Dark Mode**: Standard dark theme with zinc color palette
- **Light Mode**: Inverted colors with custom exceptions for buttons and icons

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

WHE Playtime Demo App - 2026

