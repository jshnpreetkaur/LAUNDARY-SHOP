const reviews = document.querySelectorAll(".review");
let index = 0;

function updateReviews() {
  reviews.forEach((review) => {
    review.classList.remove("left", "center", "right");
    review.style.opacity = 0;
  });

  const total = reviews.length;
  const leftIndex = (index - 1 + total) % total;
  const rightIndex = (index + 1) % total;

  reviews[leftIndex].classList.add("left");
  reviews[index].classList.add("center");
  reviews[rightIndex].classList.add("right");

  reviews[leftIndex].style.opacity = 1;
  reviews[index].style.opacity = 1;
  reviews[rightIndex].style.opacity = 1;

  index = (index + 1) % total;
}

updateReviews();
setInterval(updateReviews, 3000);
