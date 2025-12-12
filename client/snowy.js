// snow.js

// Create a container for the snowflakes
const snowContainer = document.createElement('div');
snowContainer.style.position = 'fixed';
snowContainer.style.top = '0';
snowContainer.style.left = '0';
snowContainer.style.width = '100%';
snowContainer.style.height = '100%';
snowContainer.style.pointerEvents = 'none'; // So it doesn't block clicks
snowContainer.style.zIndex = '9999'; // On top of everything
document.body.appendChild(snowContainer);

// Function to create a single snowflake (white circle)
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.style.position = 'absolute';
    const size = Math.random() * 8 + 4; // 4px to 12px
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    snowflake.style.backgroundColor = 'white';
    snowflake.style.borderRadius = '50%'; // Make it a circle
    snowflake.style.top = '-20px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random() * 0.8 + 0.2;
    snowflake.style.pointerEvents = 'none';
    snowContainer.appendChild(snowflake);

    // Animation
    let speed = Math.random() * 2 + 1; // Falling speed
    let xMovement = Math.random() * 1 - 0.5; // Side-to-side drift
    let posY = -20;
    let posX = parseFloat(snowflake.style.left);

    function fall() {
        posY += speed;
        posX += xMovement;
        snowflake.style.top = posY + 'px';
        snowflake.style.left = posX + 'px';

        if (posY > window.innerHeight) {
            snowContainer.removeChild(snowflake); // Remove when off screen
        } else {
            requestAnimationFrame(fall);
        }
    }

    fall();
}

// Generate snowflakes continuously
setInterval(createSnowflake, 150); // Every 150ms
