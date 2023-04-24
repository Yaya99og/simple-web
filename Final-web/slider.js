document.addEventListener('DOMContentLoaded', () => {
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const images = document.querySelector('.carousel').children;
  const totalImages = images.length;
  let index = 0;
  let interval;

  // Add event listeners to previous and next buttons
  prev.addEventListener('click', () => {
    clearInterval(interval);
    nextImage('prev');
  });

  next.addEventListener('click', () => {
    clearInterval(interval);
    nextImage('next');
  });

  // Function to cycle to the next image in the specified direction
  function nextImage(direction) {
    if (direction === 'next') {
      index++;
      if (index === totalImages) {
        index = 0;
      }
    } else {
      if (index === 0) {
        index = totalImages - 1;
      } else {
        index--;
      }
    }
    // Remove the 'main' class from all images and add it to the current image
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('main');
    }
    images[index].classList.add('main');
  }

  // Function to start the automatic image cycling
  function startInterval() {
    interval = setInterval(() => {
      nextImage('next');
    }, 3000);
  }

  // Start the automatic image cycling when the page loads
  startInterval();

  // Pause the automatic image cycling when the user hovers over the carousel
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseover', () => {
    clearInterval(interval);
  });

  // Resume the automatic image cycling when the user moves the mouse out of the carousel
  carousel.addEventListener('mouseout', () => {
    startInterval();
  });
});