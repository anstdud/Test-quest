// Выпадающий список
const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
burger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

//Слайдер
document.addEventListener('DOMContentLoaded', () => {
  const offerBoxContainer = document.getElementById('main-slider__offer-box-container');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const totalSlides = dots.length;
  function showSlide(index) {
      if (index >= 0 && index < totalSlides) {
          currentIndex = index;
          offerBoxContainer.style.transform = `translateX(-${index * 100}%)`;
          dots.forEach(dot => dot.classList.remove('active'));
          dots[index].classList.add('active');
      }
  }
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          showSlide(index);
      });
  });
  showSlide(currentIndex);
});

//Таймер
let countdownTime = 30 * 60;
let timerElement = document.getElementById("timer");
function startTimer(duration) {
    let timer = duration;
    let hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor(timer / 3600); 
        minutes = Math.floor((timer % 3600) / 60); 
        seconds = timer % 60; 
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if (hours >= 0) {
            timerElement.textContent = hours + ":" + minutes + ":" + seconds;
        } else {
            timerElement.textContent = minutes + ":" + seconds;
        }
        if (--timer < 0) {
            timer = duration; 
        }
    }, 1000);
}
window.onload = function () {
    startTimer(countdownTime);
};

