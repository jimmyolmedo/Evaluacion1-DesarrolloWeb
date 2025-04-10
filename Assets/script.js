const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
let selectedRating = 0;
var ranked = false;

stars.forEach((star, index) => {
  // Al pasar el mouse
  star.addEventListener('mouseover', () => {
    highlightStars(index);
  });

  // Al quitar el mouse
  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating - 1);
  });

  // Al hacer clic
  star.addEventListener('click', () => {
    if(ranked == false){
        selectedRating = index + 1;
        ratingValue.textContent = `Tu calificación: ${selectedRating}`;
        ranked = true;
    }
  });
});

function highlightStars(index) {
    if(ranked == false){
        stars.forEach((star, i) => {
            if (i <= index) {
              star.classList.add('hover');
            } else {
              star.classList.remove('hover');
            }
          });
    }
}