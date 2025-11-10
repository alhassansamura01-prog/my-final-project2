// ===== MANUAL IMAGE SLIDER WITH NEXT & PREVIOUS BUTTONS =====
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slides img");
  const dots = document.querySelectorAll(".dot");

  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((img, i) => {
    img.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}
function bookHouse(houseName) {
  localStorage.setItem("selectedHouse", houseName);
  Window.location.href = "book.html";
}
