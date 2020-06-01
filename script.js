const slider = () => {
  const domElements = {
    caruosel: document.querySelector(".header__carousel"),
    slider: document.querySelector(".header__slider"),
  };

  const interface = {
    time: 3000,
  };

  const autoPlay = () => {
    const { caruosel, slider } = domElements;
    caruosel.style.justifyContent = "flex-start";
    slider.style.transform = "translate(-20%)";
  };

  const transition = () => {
    const { slider } = domElements;

    slider.addEventListener(
      "transitionend",
      () => {
        slider.appendChild(slider.firstElementChild);
        slider.style.transition = "none";
        slider.style.transform = "translate(0)";
        setTimeout(() => {
          slider.style.transition = "all 0.7s";
        });
      },
      false
    );
  };

  const init = () => {
    setInterval(autoPlay, interface.time);
    transition();
  };
  init();
};
window.addEventListener("load", slider);
