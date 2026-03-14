# WPI_EdeMarketing

A marketing website built with [React](https://react.dev/), [Vite](https://vite.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Flowbite React](https://flowbite-react.com/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **[React 19](https://react.dev/)** – UI library
- **[Vite](https://vite.dev/)** – Build tool and dev server
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Flowbite React](https://flowbite-react.com/)** – UI component library built on top of Tailwind CSS

## Project Structure

```
src/
├── components/
│   ├── Header.jsx    # Navigation bar
│   ├── Hero.jsx      # Hero section
│   ├── Services.jsx  # Services grid
│   ├── Contact.jsx   # Contact form
│   └── Footer.jsx    # Footer
├── App.jsx           # Root component
├── main.jsx          # Entry point
└── index.css         # Global styles (Tailwind + Flowbite)
```
