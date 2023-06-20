
// Get the canvas element
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');

// Set the logo colors
const primaryColor = '#007bff';
const secondaryColor = '#ffffff';

// Draw the logo
ctx.fillStyle = primaryColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = secondaryColor;
ctx.font = 'bold 60px Roboto';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('ComplianceReviewInc.', canvas.width / 2, canvas.height / 2);
