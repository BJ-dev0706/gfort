# Gfort Website

This is the repository for the Gfort Tech Agency website.

## Performance Optimizations

### Image Lazy Loading

The website implements lazy loading for images to improve page load times:

- Images are only loaded when they enter the viewport
- Placeholder images are shown until the actual image is loaded
- A smooth fade-in effect is applied when images are loaded

### Image Optimization

You can optimize the images in the website using the following steps:

1. Install dependencies:
   ```
   npm install
   ```

2. Run the image optimization script:
   ```
   npm run optimize-images
   ```

This will create optimized versions of all images in the `public/assets/img-optimized` directory. You can then replace the original images with the optimized versions.

## Development

To start the development server:

```
npm run dev
```

The server will start on http://localhost:3000.

## Production

To start the production server:

```
npm start
```

## Caching

The server implements caching for static assets:

- Images: 7-day cache (604800 seconds)
- CSS, JS, JSON, ICO: 1-day cache (86400 seconds)
- HTML: No cache

## Additional Performance Tips

1. Use WebP images where possible for smaller file sizes
2. Compress and resize images before uploading them
3. Consider using responsive images with different sizes for different screen sizes
4. Use a CDN for serving static assets in production
