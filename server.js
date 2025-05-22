const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Cache settings for different file types
const cacheTime = {
  images: 60 * 60 * 24 * 7, // 7 days in seconds
  static: 60 * 60 * 24, // 1 day in seconds
  html: 0 // No cache for HTML files
};

// Set cache headers for static files based on their type
app.use((req, res, next) => {
  const url = req.url;
  
  // Apply different cache settings based on file type
  if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
    // Images - longer cache time
    res.setHeader('Cache-Control', `public, max-age=${cacheTime.images}`);
  } else if (url.match(/\.(css|js|json|ico)$/i)) {
    // Static assets - medium cache time
    res.setHeader('Cache-Control', `public, max-age=${cacheTime.static}`);
  } else if (url.match(/\.html$/i) || url === '/') {
    // HTML files - no cache
    res.setHeader('Cache-Control', 'no-store, max-age=0');
  }
  
  next();
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 