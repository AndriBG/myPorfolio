const SELECTOR_LEFT = '.left';
const SELECTOR_RIGTH = '.right';
const ANIMATE_CLASS_NAME = 'animated';

const animate = element => (
  element.classList.add(ANIMATE_CLASS_NAME)
);

const isAnimated = element => (
  element.classList.contains(ANIMATE_CLASS_NAME)
);

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    
    // when element's is in viewport,
    // animate it!
    if (entry.intersectionRatio > 0) {
      animate(entry.target);
      // remove observer after animation
      observer.unobserve(entry.target);
    }

  });
});

// get only these elements,
// which are not animated yet
const elements = [].filter.call(
  document.querySelectorAll(SELECTOR_LEFT),
  element => !isAnimated(element, ANIMATE_CLASS_NAME)
);
//console.log(elements);

const elements2 = [].filter.call(
    document.querySelectorAll(SELECTOR_RIGTH),
    element => !isAnimated(element, ANIMATE_CLASS_NAME)
  );

// start observing your elements
elements.forEach(element => intersectionObserver.observe(element));
elements2.forEach(element => intersectionObserver.observe(element));

(function() {
  var $body = document.body;
  $body.bind('scroll', function() {
      // "Desactivar" el scroll horizontal
      if ($body.scrollLeft() !== 0) {
          $body.scrollLeft(0);
      }
  });
});