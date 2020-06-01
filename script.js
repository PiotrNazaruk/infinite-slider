

const slider = () => {
  const domElements = {
    caruosel: document.querySelector(".carousel"),
    slider: document.querySelector(".slider"),
    prev: document.querySelector(".prev"),
    next: document.querySelector(".next"),
  };

  const interface = {
    directionRight: "right",
    directionLeft: "left",
    time: 3000,
  }

  const autoPlay = () => {
    const {caruosel,slider} =domElements;
    let {direction,time}= interface;
    setInterval(() => {
      direction = "right";
      caruosel.style.justifyContent = "flex-start";
      slider.style.transform = "translate(-20%)";
    }, time);
  };
  const arrowControls =()=>{
    const {next,prev,slider} = domElements;
   
  }
  const transition = ()=>{
    const {slider} = domElements;
    let {direction} = interface;
    slider.addEventListener('transitionend', ()=> {
      // get the last element and append it to the front
    
      if (direction === "left") {
       slider.prepend(slider.lastElementChild);
      } else {
        slider.appendChild(slider.firstElementChild);
      }
    
      slider.style.transition = 'none';
      slider.style.transform = 'translate(0)';
      setTimeout(() => {
        slider.style.transition = 'all 0.5s';
      })
    }, false);
  }

  const init = () => {
    autoPlay();
    transition()
  };
  init();
};
window.addEventListener("load", slider);
