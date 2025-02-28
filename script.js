const preloadImages = ['shocked.png', 'think.png', 'angry.png', 'crying.png', 'cat_cry', 'cat_gun_shut_himself.jpg', 'hug.png'];
preloadImages.forEach(img => {
  new Image().src = `./images/${img}`;
});

let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");
let container = document.querySelector(".container");

let clickCount = 0;

const noTexts = [
    "？Are you serious?…", 
    "Dont think about it anymore？", 
    "Dont choose this！ ", 
    "Im going to be sad…", 
    "Cry cry cry",
    "Ik youre interested in someone other than me, thats why you reject me ",
    "I will shoot myself",
    "I will shoot myself"
];

// Efek kembang api
function createFirework() {
    const colors = ['#ff3366', '#ffd700', '#00ff87', '#7d3cff'];
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    firework.style.left = Math.random() * 95 + "vw";
    firework.style.top = Math.random() * 95 + "vh";
    document.getElementById("fireworks-container").appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
}

// Event klik tombol NO
noButton.addEventListener("click", function() {
    if (navigator.vibrate) navigator.vibrate(100);
    clickCount++;

    // Memperlambat efek pembesaran container
    let scaleFactor = 1 + (clickCount * 0.05);
    container.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;

    // Memperlambat efek pembesaran tombol YES
    yesButton.style.transform = `scale(${1 + (clickCount * 0.1)})`;
    
    // Memperlambat efek perpindahan tombol NO
    noButton.style.transform = `translateX(${clickCount * 30}px)`;

    // Memperlambat pergerakan gambar dan teks ke atas
    mainImage.style.transform = `translateY(-${clickCount * 15}px)`;
    questionText.style.transform = `translateY(-${clickCount * 15}px)`;

    if (clickCount <= noTexts.length) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    const imgMap = {
        1: "shocked.png",
        2: "think.png", 
        3: "angry.png",
        4: "crying.png",
        5: "white_cat_cry.jpg",
        6: "think.png",
        7: "cat_gun_shut_himself.jpg"
    };
    
    if (imgMap[clickCount]) {
        mainImage.src = `./images/${imgMap[clickCount]}`;
    }
});

// Event klik tombol YES
yesButton.addEventListener("click", function() {
    const fireworksInterval = setInterval(() => {
        for(let i=0; i<5; i++) createFirework();
    }, 200);
    
    setTimeout(() => {
        clearInterval(fireworksInterval);
        document.body.innerHTML = `
            <div class="yes-screen">
                <h1 class="yes-text">Good choice!!! </br> 
                A7bkkk Akthr!!! (♡°▽°♡)</h1>
                <img src="./images/hug.png" alt="拥抱" class="yes-image">
                <h1> Now we are a couple of lovers <br>
                You are not allowed to decline😝 </h1>            
            </div>
            <div class="watermark-line"></div>
        `;
        document.body.style.overflow = "hidden";
    }, 3000);
});