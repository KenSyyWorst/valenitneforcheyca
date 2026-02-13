const messages = [
    "Hai kamu ❤️",
    "Aku mau bilang sesuatu...",
    "Terima kasih sudah hadir di hidupku.",
    "Setiap momen bersamamu itu spesial.",
    "Dan ini sebagian kenangan kita 💕"
];

const storyText = document.getElementById("storyText");
const nextBtn = document.getElementById("nextBtn");
const storySection = document.getElementById("storySection");
const gallerySection = document.getElementById("gallerySection");
const gallery = document.getElementById("gallery");
const bgMusic = document.getElementById("bgMusic");

let currentIndex = 0;

storyText.innerText = messages[currentIndex];

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex < messages.length) {
        storyText.style.opacity = 0;
        setTimeout(() => {
            storyText.innerText = messages[currentIndex];
            storyText.style.opacity = 1;
        }, 300);
    } else {
        showGallery();
    }
});

function showGallery() {
    storySection.style.display = "none";
    gallerySection.classList.remove("hidden");

    const totalPhotos = 6; // sesuaikan jumlah foto

    for (let i = 1; i <= totalPhotos; i++) {
        const img = document.createElement("img");
        img.src = `${i}.jpng`;
        gallery.appendChild(img);
    }

    startHearts();
    playMusic();
}

/* PLAY MUSIC */
function playMusic() {
    bgMusic.play().catch(error => {
        console.log("Autoplay diblokir browser.");
    });
}

/* LOVE ANIMATION */
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 300);
}