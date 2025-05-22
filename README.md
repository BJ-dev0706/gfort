# Express Static Website Server

This is an Express.js server that serves static HTML files.

## Installation

```bash
npm install
```

## Running the Server

### Production
```bash
npm start
```

### Development (with auto-restart)
```bash
npm run dev
```

The server will run on http://localhost:3000 by default. You can change the port by setting the PORT environment variable.

## Features

- Serves all static files (HTML, CSS, JS, images, etc.)
- Falls back to index.html for any route that doesn't match a file (for SPA support)
- Simple and lightweight setup
