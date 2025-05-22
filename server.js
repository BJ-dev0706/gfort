const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const cacheTime = {
  images: 60 * 60 * 24 * 7,
  static: 60 * 60 * 24,
  html: 0
};

app.use((req, res, next) => {
  const url = req.url;
  
  if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
    res.setHeader('Cache-Control', `public, max-age=${cacheTime.images}`);
  } else if (url.match(/\.(css|js|json|ico)$/i)) {
    res.setHeader('Cache-Control', `public, max-age=${cacheTime.static}`);
  } else if (url.match(/\.html$/i) || url === '/') {
    res.setHeader('Cache-Control', 'no-store, max-age=0');
  }

  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/portfolio.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/contact.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/services.html'));
});

app.get('/team', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/team.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});