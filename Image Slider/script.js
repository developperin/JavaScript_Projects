let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slides img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.BackgroundColor = "yellow";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds -- devlopper.io
}
