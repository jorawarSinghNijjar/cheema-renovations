// -----------------------------------------------------Rating----------------------------------------------------

const ratingCardGroup = document.getElementById("rating-card-group");

const ratingCardData = [
  {
    rating: 5,
    review:
      "I was looking for a socially responsible investment strategy,and Cheema Renovations delivered.",
    reviewerName: "Sarah Benett",
  },
  {
    rating: 5,
    review:
      "I was looking for a socially responsible investment strategy,and Cheema Renovations delivered.",
    reviewerName: "Sarah Benett",
  },
  {
    rating: 5,
    review:
      "I was looking for a socially responsible investment strategy,and Cheema Renovations delivered.",
    reviewerName: "Sarah Benett",
  },
  {
    rating: 5,
    review:
      "I was looking for a socially responsible investment strategy,and Cheema Renovations delivered.",
    reviewerName: "Sarah Benett",
  },
  {
    rating: 5,
    review:
      "I was looking for a socially responsible investment strategy,and Cheema Renovations delivered.",
    reviewerName: "Sarah Benett",
  },
  {
    rating: 5,
    review:
      "I was looking for a socially responsible investment strategy,and Cheema Renovations delivered.",
    reviewerName: "Sarah Benett",
  },
];

const getRatingArr = (rating) => {
  let ratingArr = [];
  for (let i = 0; i <= 4; i++) {
    ratingArr[i] = i < rating ? true : false;
  }
  return ratingArr;
};

ratingCardData.forEach(({ rating, review, reviewerName }, index) => {
  ratingCardGroup.innerHTML += `<div class="review-card">
    <div class="review-card__star-group">
        ${getRatingArr(rating)
          .map((val) =>
            val
              ? `<img src="assets/images/reviews/star.svg" alt="review-rating" />`
              : `<img src="assets/images/reviews/outline-star.svg" alt="review-rating-empty" />`
          )
          .join("")}
    </div>
    <p class="review-card__review-text">
      ${review}
    </p>
    <p class="review-card__reviewer-name">${reviewerName}</p>
  </div>`;
});

// -----------------------------------------------------Accordion----------------------------------------------------

const acc = document.getElementsByClassName("accordion-item");
// console.log(acc);

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    acc[i].classList.toggle("active");
    const accBody = acc[i].nextElementSibling;

    const accIcon = acc[i].children[1];
    console.log(accIcon);
    accIcon.classList.toggle("active");

    if (accBody.style.maxHeight) {
      accBody.style.maxHeight = null;
    } else {
      accBody.style.maxHeight = accBody.scrollHeight + "px";
    }
  });
}
