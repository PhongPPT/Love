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

  // Show the hidden container
  container.classList.add("show");

  // Prevent adding iframe more than once
  if (container.querySelector("iframe")) return;

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.youtube.com/embed/Ir_qJteOI3c?autoplay=1&loop=1&playlist=Ir_qJteOI3c";
  iframe.title = "YouTube video player";
  iframe.frameBorder = "0";
  iframe.allow = "autoplay; encrypted-media";
  iframe.allowFullscreen = true;

  container.appendChild(iframe);
}

function showLovePopup() {
  Swal.fire({
    title: "💘 kh huk bab na 💘",
    text: "khue lok thung bai khrng kh 💖",
    icon: "success",
    confirmButtonText: "🥰 kh huk bab t sout leiy der",
    background: "#fff0f5",
    color: "#d63384",
  });
}
