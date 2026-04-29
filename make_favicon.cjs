const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, 'public', 'sygo_logo.jpg');
const svgPath = path.join(__dirname, 'public', 'favicon.svg');

// Read the JPEG
const imgBuffer = fs.readFileSync(imgPath);
const base64Img = imgBuffer.toString('base64');

// Create an SVG with a circular clipping path
const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 1024 1024" width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleClip">
      <circle cx="512" cy="512" r="512" />
    </clipPath>
  </defs>
  <image 
    href="data:image/jpeg;base64,${base64Img}" 
    width="1024" 
    height="1024" 
    clip-path="url(#circleClip)" 
    preserveAspectRatio="xMidYMid slice"
  />
</svg>`;

fs.writeFileSync(svgPath, svgContent);
console.log('SVG Favicon successfully generated!');
