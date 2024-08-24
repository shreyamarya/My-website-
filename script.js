function createAsciiRain() {
    const asciiRain = document.getElementById("ascii-rain");
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    setInterval(() => {
        const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = -20; // Start characters above the viewport

        const charDiv = document.createElement("div");
        charDiv.textContent = randomChar;
        charDiv.style.position = "absolute";
        charDiv.style.left = randomX + "px";
        charDiv.style.top = randomY + "px";
        charDiv.style.color = "green"; // Adjust color as needed
        charDiv.style.fontSize = "12px"; // Adjust font size as needed

        asciiRain.appendChild(charDiv);

        setTimeout(() => {
            charDiv.remove();
        }, 3000); // Adjust the lifetime of characters
    }, 50); // Adjust the frequency of character creation
}

createAsciiRain();
