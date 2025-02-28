// script.js
const preloadImages = ['shocked.png', 'think.png', 'angry.png', 'crying.png', 'hug.png'];
preloadImages.forEach(img => {
  new Image().src = `./images/${img}`;
});

let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

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

// 烟花特效函数
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

noButton.addEventListener("click", function() {
    if (navigator.vibrate) navigator.vibrate(100);
    clickCount++;

    yesButton.style.transform = `scale(${1 + (clickCount * 1.2)})`;
    noButton.style.transform = `translateX(${clickCount * 50}px)`;
    
    mainImage.style.transform = `translateY(-${clickCount * 25}px)`;
    questionText.style.transform = `translateY(-${clickCount * 25}px)`;

    if (clickCount <= 8) noButton.innerText = noTexts[clickCount - 1];
    
    const imgMap = {
        1: "shocked.png",
        2: "think.png", 
        3: "angry.png",
        4: "crying.png",
        5: "cat_Cry.jpg",
        6: "think.png",
        7: "cat_gun_shut_himself.jpg"

    };
    if (imgMap[clickCount]) mainImage.src = `./images/${imgMap[clickCount]}`;
});

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
        `;
        document.body.style.overflow = "hidden";
    }, 3000);
});
