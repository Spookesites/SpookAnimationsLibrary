function scrollAnimation(element, animationClass) {
  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight) {
    element.classList.add(animationClass);
  }

  window.addEventListener('scroll', () => {
    if (elementPosition < screenHeight) {
      element.classList.add(animationClass);
    }
  });
}

function hoverAnimation(element, animationClass) {
  element.addEventListener('mouseenter', () => {
    element.classList.add(animationClass);
  });

  element.addEventListener('mouseleave', () => {
    element.classList.remove(animationClass);
  });
}

function loadAnimation(element, animationClass) {
  element.classList.add(animationClass);

  window.addEventListener('load', () => {
    element.classList.remove(animationClass);
  });
}

function transitionAnimation(element, animationClass) {
  window.addEventListener('beforeunload', () => {
    element.classList.add(animationClass);
  });
}

function scrollEffect(element, effectClass, effectValue) {
  window.addEventListener('scroll', () => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight) {
      element.style.setProperty(effectClass, effectValue);
    }
  });
}
