// Show the hidden love message
function showMessage() {
  const msg = document.getElementById("loveMessage");
  msg.classList.remove("hidden");
}

// Function to create a heart element
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Random size between 10px and 30px
  const size = Math.random() * 20 + 10;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // Start from bottom
  heart.style.bottom = "-50px";

  // Random animation duration (5–10s)
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";

  // Random opacity (0.5–1)
  heart.style.opacity = Math.random();

  // Add heart to container
  const heartContainer = document.getElementById("heart-container");
  heartContainer.appendChild(heart);

  // Remove the heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Create a new heart every 300ms
setInterval(createHeart, 300);

function playMusic() {
  const container = document.getElementById("video-container");

  // Prevent duplicate iframe
  if (container.querySelector("iframe")) return;

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.youtube.com/embed/Ir_qJteOI3c?autoplay=1&loop=1&playlist=Ir_qJteOI3c";
  iframe.title = "YouTube video player";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  container.appendChild(iframe);
}
