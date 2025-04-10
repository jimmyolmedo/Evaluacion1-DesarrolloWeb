const ratingContainers = document.querySelectorAll('.rating-container');

ratingContainers.forEach(container => {
    const stars = container.querySelectorAll('.star');
    const ratingValue = container.querySelector('.rating-value');
    let selectedRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
      highlightStars(index);
    });

    star.addEventListener('mouseout', () => {
      highlightStars(selectedRating - 1);
    });

    star.addEventListener('click', () => {
      selectedRating = index + 1;
      ratingValue.textContent = `Tu calificación: ${selectedRating}`;
    });
  });

  function highlightStars(index) {
    stars.forEach((star, i) => {
      if (i <= index) {
        star.classList.add('hover');
      } else {
        star.classList.remove('hover');
      }
    });
  }
});
// function changePage(img)