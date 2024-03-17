import "./sass/main.scss";
import { paperMenu } from "./menu.js";
import { animateValue } from "./statsAnimation.js";

// import  Avatar1 from "../public/assets/images/reviews/avatars/1.jpg";
// import  Avatar2 from "../public/assets/images/reviews/avatars/2.jpg";
// import  Avatar3 from "../public/assets/images/reviews/avatars/3.jpg";
// import  Avatar4 from "../public/assets/images/reviews/avatars/4.jpg";
// import  Avatar5 from "../public/assets/images/reviews/avatars/5.jpg";
// import  Avatar6 from "../public/assets/images/reviews/avatars/6.jpg";
// import  Avatar7 from "../public/assets/images/reviews/avatars/7.jpg";
// import  Avatar8 from "../public/assets/images/reviews/avatars/8.jpg";

// import  Avatar1 from "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/1.jpg";
// import  Avatar2 from "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/2.jpg";
// import  Avatar3 from "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/3.jpg";
// import  Avatar4 from "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/4.jpg";

// -----------------------------------------------------Paper Menu----------------------------------------------------


// console.log("Hello from index.js");

$(window).on("load", function () {
  paperMenu.init();
});

// -----------------------------------------------------Rating----------------------------------------------------



const ratingCardGroup = document.getElementById("rating-card-group");

const ratingCardData = [
  {
    rating: 5,
    review:
      "Cheema Renovations did an excellent job with my basement renovation. I'm extremely satisfied with the results.",
    reviewerName: "John Smith",
    avatar:
      "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/john.jpg",
  },
  {
    rating: 4,
    review:
      "I'm very happy with the quality of work provided by Cheema Renovations. The basement looks fantastic.",
    reviewerName: "Emily Johnson",
    avatar:
      "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/emily.jpg",
  },
  {
    rating: 5,
    review:
      "Cheema Renovations exceeded my expectations with their professionalism and attention to detail. Highly recommended!",
    reviewerName: "Michael Williams",
    avatar:
      "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/michael.jpg",
  },
  {
    rating: 5,
    review:
      "I had a great experience working with Cheema Renovations. They were responsive, efficient, and delivered exceptional results.",
    reviewerName: "Olivia Brown",
    avatar:
      "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/olivia.jpg",
  },
  {
    rating: 5,
    review:
      "Cheema Renovations transformed my basement into a beautiful space that I can now enjoy with my family. Thank you!",
    reviewerName: "William Davis",
    avatar:
      "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/william.jpg",
  },
  {
    rating: 5,
    review:
      "I'm thrilled with the outcome of my basement renovation project. Cheema Renovations provided top-notch service from start to finish.",
    reviewerName: "Miller Davison",
    avatar:
      "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/miller.jpg",
  },
  {
    rating: 5,
    review:
      "From the initial consultation to the final touches, Cheema Renovations demonstrated professionalism and expertise. I couldn't be happier.",
    reviewerName: "James Wilson",
    avatar:
      "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/james.jpg",
  },
  {
    rating: 4,
    review:
      "Overall, I'm very satisfied with the work done by Cheema Renovations. However, there were minor delays in the project timeline.",
    reviewerName: "Karl Hormisdas",
    avatar:
      "https://ik.imagekit.io/zkz3xepw7/cheema-renovations/images/reviewers/karl.jpg",
  },
];

const getRatingArr = (rating) => {
  let ratingArr = [];
  for (let i = 0; i <= 4; i++) {
    ratingArr[i] = i < rating ? true : false;
  }
  return ratingArr;
};

ratingCardData.forEach(({ rating, review, reviewerName, avatar }, index) => {
  ratingCardGroup.innerHTML += `<div class="review-card">
    <img src="${avatar}" alt="avatar" class="avatar review-card__avatar" />
    <div class="review-card__star-group">
        ${getRatingArr(rating)
          .map((val) =>
            val
              ? `<img src="../public/assets/images/reviews/star.svg" alt="review-rating" />`
              : `<img src="../public/assets/images/reviews/outline-star.svg" alt="review-rating-empty" />`
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

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", (e) => {
    const currentAccordion = e.currentTarget;
    const currentAccordionBody = currentAccordion.nextElementSibling;
    const currentAccordionIcon = currentAccordion.children[1];
    
    // Toggle active class for the clicked accordion item
    currentAccordion.classList.toggle("active");
    currentAccordionIcon.classList.toggle("active");
    
    // Toggle maxHeight for the clicked accordion item's body
    if (currentAccordionBody.style.maxHeight) {
      currentAccordionBody.style.maxHeight = null;
    } else {
      currentAccordionBody.style.maxHeight = currentAccordionBody.scrollHeight + "px";
    }
    
    // Collapse all other accordion items
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== currentAccordion) {
        acc[j].classList.remove("active");
        const accordionBody = acc[j].nextElementSibling;
        const accordionIcon = acc[j].children[1];
        accordionBody.style.maxHeight = null;
        accordionIcon.classList.remove("active");
      }
    }
  });
}


// -----------------------------------------------------Stats Animation----------------------------------------------------

const el1 = document.getElementById("val1");
const el2 = document.getElementById("val2");
const el3 = document.getElementById("val3");

const val1 = parseInt(el1.textContent);
const val2 = parseInt(el2.textContent);
const val3 = parseInt(el3.textContent);

console.log(parseInt(el1.textContent));

var animationTriggered = false;

$('#paper-window').on("scroll", function () {
  console.log("scroll");
  if (!animationTriggered) {
    var sectionStats = $(".section-stats")[0]; // Get the DOM element
    var statsRect = sectionStats.getBoundingClientRect(); // Get the position of the element
    var windowHeight = $('#paper-window').height();
    var scrollTop = $('#paper-window').scrollTop();
    var viewportBottom = scrollTop + windowHeight;

    if (statsRect.bottom < viewportBottom) {
      console.log("animation triggered");
      animateValue(el1, 0, val1, 2000);
      animateValue(el2, 0, val2, 4000);
      animateValue(el3, 0, val3, 2000);
      animationTriggered = true;
    }
  }
});




// animateValue(el1, 0, 20, 2000);
