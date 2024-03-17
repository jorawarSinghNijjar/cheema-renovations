export function animateValue(obj, start, end, duration) {
  console.log("Animation Start");

  let step = (end - start) / Math.floor((end - start) / 5);
  let intervalStep = duration / ((end-start) / step);
  console.log("step: " + step);
  console.log("intervalStep: " + intervalStep);
  let interval = setInterval(() => {
    if (start >= end) {
      clearInterval(interval);
      console.log("Animation End");
      return;
    }
    start += step
    console.log(start);
    $(obj).text(Math.round(start));
  }, intervalStep);

 
}
