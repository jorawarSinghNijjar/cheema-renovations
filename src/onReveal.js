// export const onReveal = (elementSelector, callback) => {
//   var animationTriggered = false;

//   $("#paper-window").on("scroll", function onScroll() {
//     console.log("scroll");
//     if (!animationTriggered) {
//       var targetElement = $(elementSelector)[0]; // Get the DOM element
//       var elementRect = targetElement.getBoundingClientRect(); // Get the position of the element
//       var windowHeight = $("#paper-window").height();
//       var scrollTop = $("#paper-window").scrollTop();
//       var viewportBottom = scrollTop + windowHeight;

//       if (elementRect.bottom < viewportBottom) {
//         callback();
//         console.log("animation done");
//         $("#paper-window").off("scroll", onScroll);
//       }
//     }
//   });
// };


export const onReveal = (elementSelector, callback) => {
  let callbackExecuted = false; // Flag to track whether the callback has been executed

  const options = {
    root: document.querySelector('#paper-window'), // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !callbackExecuted) {
        callback();
        console.log("animation done");
        callbackExecuted = true; // Set the flag to true after the callback is executed
        observer.unobserve(entry.target); // Stop observing the target element
      }
    });
  }, options);

  const onIntersection = function(event) {
    observer.observe(event.target);
  };

  $(elementSelector).on('intersect', onIntersection);

  const targetElement = $(elementSelector)[0];
  if (targetElement) {
    observer.observe(targetElement);
  }
};
