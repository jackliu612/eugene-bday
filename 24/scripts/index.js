let openBtn = document.querySelector(".js-card-opener");

openBtn.onclick = function () {
  document.body.classList.toggle("open");
  if (document.body.classList.contains("open")) {
    jsConfetti.addConfetti({
            confettiRadius: 6,
            confettiNumber: 500,
            confettiColors: [
                '#E57200', '#232D4B',
              ],
        });
    }
};

let jsConfetti;

jsConfetti = new JSConfetti()

function setup() {
    new CircleType(document.getElementById('topText'))
    .radius(350);

    new CircleType(document.getElementById('bottomText'))
    .dir(-1)
    .radius(350);

}

var currentIndex = 0;
var images = ["divinity.JPG", "duo.jpeg", "fallout.jpeg", "kbbq.JPG", "raft.JPG", "vrising.JPG"]; // Add more image paths as needed
var totalImages = images.length;
var currentImage = document.getElementById('slideshow');

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  currentImage.style.opacity = 0; // Fade out the current image
  setTimeout(function() {
    currentImage.src = "imgs/"+images[currentIndex];
    currentImage.style.opacity = 1; // Fade in the new image
  }, 500); // Adjust timing to match the transition duration
}

function startSlideshow() {
  setInterval(nextSlide, 5000); // Change 2000 to adjust the interval (in milliseconds)
}

startSlideshow();