const messages = [
    "Hai kamu Cheyca Cahyanita Andreaningtya ❤️",
    "Aku punya sesuatu untukmu di harivalentine day",
    "Terima kasih sudah hadir di hidupku aku sangat besyukur atas sayang yang terlahir di dunia ini akuu sangat bahgaiaaa.",
    "Setiap detik bersamamu itu berharga jika surga memecah dirinya menjadi bagian-bagian kecil aku yakin ia menyelipkannya di caramu tersenyum.",
    "Dan ini adalah sebagian kenangan kita yang tidak akan pernah di luoakan oleh waktu dan di setiap detik aku sangat mengingat apa yang kita lakukan 💕"
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

    const totalPhotos = 6; // ubah sesuai jumlah foto kamu

    for (let i = 1; i <= totalPhotos; i++) {
        const img = document.createElement("img");
        img.src = `${i}.jpeg`;
        img.alt = `Foto ${i}`;
        gallery.appendChild(img);
    }

    startHearts();
    playMusic();
}

function playMusic() {
    bgMusic.play().catch(() => {
        console.log("Autoplay mungkin diblokir browser.");
    });
}

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