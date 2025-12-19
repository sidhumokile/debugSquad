function showBalloons() {
  const balloons = document.getElementById("balloons");
  balloons.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    let balloon = document.createElement("span");
    balloon.innerHTML = "🎈";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = (Math.random() * 3 + 3) + "s";
    balloons.appendChild(balloon);
  }
}

function magicWish() {
  const wishes = [
    "🎉 May your day be as special as you are!",
    "✨ Wishing you endless happiness and love!",
    "🎂 May all your dreams come true!",
    "💫 Stay awesome and keep shining!",
    "🥳 Have the best birthday ever!"
  ];
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  document.getElementById("wishMessage").innerText = randomWish;
}
