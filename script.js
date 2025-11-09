console.log("Il mio sito è ONLINE!");
setTimeout(() => {
  const h1 = document.querySelector('h1');
  if (h1) {
    h1.innerText = 'Benvenuto nel mio mondo!';
  }
}, 3000);
const openBtn = document.getElementById('openPopup');
const popup = document.getElementById('myPopup');
const closeBtn = document.querySelector('.close');
const closePopupBtn = document.getElementById('closePopup');
if (openBtn && popup) {
  openBtn.onclick = () => {
    popup.classList.add('show');
  };
}
if (closeBtn && popup) {
  closeBtn.onclick = () => {
    popup.classList.remove('show');
  };
}
if (closePopupBtn && popup) {
  closePopupBtn.onclick = () => {
    popup.classList.remove('show');
  };
}
if (popup) {
  window.onclick = (event) => {
    if (event.target === popup) {
      popup.classList.remove('show');
    }
  };
}
function launchConfetti() {
  const colors = ['#5a67d8', '#48bb78', '#ff6b6b', '#f7b731', '#a55eea'];
  let count = 0;
  const max = 80;

  function createConfetto() {
    if (count >= max) return;

    const confetto = document.createElement('div');
    confetto.style.position = 'fixed';
    confetto.style.left = Math.random() * 100 + 'vw';
    confetto.style.top = '-10px';
    confetto.style.width = '10px';
    confetto.style.height = '10px';
    confetto.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetto.style.borderRadius = '50%';
    confetto.style.pointerEvents = 'none';
    confetto.style.zIndex = '9999';
    confetto.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

    document.body.appendChild(confetto);
    count++;

    setTimeout(() => confetto.remove(), 5000);
  }
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  for (let i = 0; i < max; i++) {
    setTimeout(createConfetto, i * 50);
  }
}
openBtn.onclick = () => {
  popup.classList.add('show');
  launchConfetti();
};