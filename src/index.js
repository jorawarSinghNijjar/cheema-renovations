import "./sass/main.scss";
import anime from "animejs/lib/anime.es.js";
import { paperMenu } from "./menu.js";
import { animateValue } from "./statsAnimation.js";
import { onReveal, playAnimation } from "./onReveal.js";

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

$(window).on("load", function () {
  // -----------------------------------------------------Paper Menu----------------------------------------------------
  paperMenu.init();

  // -----------------------------------------------------Onload Animations----------------------------------------------------
  var timeline = anime.timeline({ direction: "normal" });
  var textWrapper = document.querySelector(".section-hero__heading");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  timeline
    .add({
      targets: ".section-hero__hero-image-wrapper",
      opacity: {
        value: [0, 1],
        duration: 1000,
        easing: "cubicBezier(.5, .05, .1, .3)",
      },
    })
    .add({
      targets: ".section-hero__heading .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 500,
      delay: (el, i) => 30 * (i + 1),
    })
    .add({
      targets: ".section-hero__button",
      opacity: {
        value: [0, 1],
        duration: 1000,
        easing: "cubicBezier(.5, .05, .1, .3)",
      },
    })
    // .add({
    //   targets: ".section-hero__video-thumbnail-wrapper",
    //   opacity: [0, 1],
    //   translateX: {
    //     value: ["-20%", "0%"],
    //     duration: 1000,
    //     easing: "cubicBezier(.5, .05, .1, .3)",
    //   },
    //   duration: 1000,
    //   easing: "cubicBezier(.5,.05,.1,.3)",
    // });
});

// Function to check if the screen size is greater than 64em
function isScreenSizeGreaterThan64em() {
  return window.matchMedia("(min-width: 64em)").matches;
}

// Function to run the animation

onReveal(".section-about__overlap-flex-box", () => {
  var overlapBoxTimeline = anime.timeline({ direction: "normal" });

  if (isScreenSizeGreaterThan64em()) {
    overlapBoxTimeline
      .add({
        targets: ".section-about__hero-image-wrapper",
        opacity: {
          value: [0, 1],
          duration: 800,
          easing: "cubicBezier(.5,.05,.1,.3)",
        },
        scale: {
          value: [0.5, 1],
          duration: 800,
          easing: "cubicBezier(.5,.05,.1,.3)",
        },
      })
      .add({
        targets: ".section-about__heading-box",
        opacity: 1,
        translateX: {
          value: ["-100%", "40%"],
          duration: 700,
          easing: "easeOutQuad",
        },
        translateY: {
          value: ["-50%", "-50%"],
          duration: 700,
          easing: "easeOutQuad",
        },
      })
      .add({
        targets: ".section-about__heading-box",
        zIndex: {
          value: 2,
          duration: 100,
        },
      })
      .add({
        targets: ".section-about__heading-box",
        translateX: {
          value: ["40%", "0%"],
          duration: 600,
          easing: "easeInCubic",
        },
        translateY: {
          value: ["-50%", "-50%"],
          duration: 600,
          easing: "easeInCubic",
        },
      });
  } else {
    console.log("less than 64em");
    overlapBoxTimeline
      .add({
        targets: ".section-about__hero-image-wrapper",
        opacity: {
          value: [0, 1],
          duration: 800,
          easing: "cubicBezier(.5,.05,.1,.3)",
        },
      })
      .add({
        targets: ".section-about__heading-box",
        opacity: {
          value: [0, 1],
          duration: 800,
          easing: "cubicBezier(.5,.05,.1,.3)",
        },
      });
  }
});

onReveal(".section-services", () => {
  console.log("here");
  var textCardTimeline = anime.timeline({ direction: "normal" });
  textCardTimeline
    .add({
      targets: ".section-services__heading",
      opacity: {
        value: [0, 1],
        duration: 500,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
    })
    .add({
      targets: ".text-card",
      scale: {
        value: ["50%", "100%"],
        duration: 1000,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
      opacity: {
        value: [0, 1],
        duration: 1000,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
      delay: anime.stagger(200),
    })
    .add({
      targets: ".section-services__button",
      opacity: {
        value: [0, 1],
        duration: 500,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
    });
});

onReveal(".section-reviews__heading", () => {
  var reviewsTimeline = anime.timeline({ direction: "normal" });
  reviewsTimeline
    .add({
      targets: ".section-reviews__sub-heading",
      opacity: {
        value: [0, 1],
        duration: 500,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
    })
    .add({
      targets: ".section-reviews__heading",
      opacity: {
        value: [0, 1],
        duration: 500,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
    })

    .add({
      targets: ".review-card",
      opacity: {
        value: [0, 1],
        duration: 800,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
      delay: anime.stagger(200),
    });
});

onReveal(".section-portfolio__heading", () => {
  var portfolioTimeline = anime.timeline({ direction: "normal" });
  portfolioTimeline
    .add({
      targets: ".section-portfolio__heading",
      opacity: {
        value: [0, 1],
        duration: 500,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
    })
    .add({
      targets: ".section-portfolio__sub-heading",
      opacity: {
        value: [0, 1],
        duration: 500,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
    })
    .add({
      targets: ".grid-item",
      opacity: {
        value: [0, 1],
        duration: 500,
        easing: "cubicBezier(.5,.05,.1,.3)",
      },
      delay: anime.stagger(200),
    });
});

// Remove letter spans
// var textWithoutSpans = textWrapper.innerText;
// textWrapper.innerHTML = textWithoutSpans;

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
      currentAccordionBody.style.maxHeight =
        currentAccordionBody.scrollHeight + "px";
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

onReveal(".section-stats", () => {
  // animateValue(el1, 0, val1, 2000);
  animateValue(el2, 0, val2, 4000);
  animateValue(el3, 0, val3, 2000);
});
