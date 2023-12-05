class ChristmasCounter {
  htmlElements = {
    htmlDaysElement: document.querySelector(".days"),
    htmlHoursElement: document.querySelector(".hours"),
    htmlMinutesElement: document.querySelector(".minutes"),
    htmlSecondsElement: document.querySelector(".seconds"),
    htmlNavBtn: document.querySelector(".nav-btn"),
    htmlNavBar: document.querySelector(".nav-bar"),
  };
  init() {
    const date = new Date("12/25/2023");
    const endTime = date.getTime();
    this.calculateTimeLeft(endTime);
    this.htmlElements.htmlNavBtn.addEventListener(
      "click",
      this.toggleNavBar.bind(this)
    );
  }

  toggleNavBar() {
    this.htmlElements.htmlNavBar.classList.toggle("active");
  }

  calculateTimeLeft(time) {
    setInterval(() => {
      const timeNow = new Date().getTime();
      const timeLeft = time - timeNow;
      this.setDays(timeLeft);
      this.setHours(timeLeft);
      this.setMinutes(timeLeft);
      this.setSeconds(timeLeft);
    }, 1000);
  }

  setDays(time) {
    let result = Math.floor(time / (1000 * 60 * 60 * 24));
    this.htmlElements.htmlDaysElement.textContent = result.toFixed(0);
  }
  setHours(time) {
    let result = Math.floor((time / (1000 * 60 * 60)) % 24);
    let finalResult = result.toFixed(0);
    finalResult < 10 ? (finalResult = "0" + finalResult) : finalResult;
    this.htmlElements.htmlHoursElement.textContent = finalResult;
  }
  setMinutes(time) {
    let result = Math.floor((time / (1000 * 60)) % 60);
    let finalResult = result.toFixed(0);
    finalResult < 10 ? (finalResult = "0" + finalResult) : finalResult;
    this.htmlElements.htmlMinutesElement.textContent = finalResult;
  }
  setSeconds(time) {
    let result = Math.floor((time / 1000) % 60);
    let finalResult = result.toFixed(0);
    finalResult < 10 ? (finalResult = "0" + finalResult) : finalResult;
    this.htmlElements.htmlSecondsElement.textContent = finalResult;
  }
}

window.onload = function () {
  const counter = new ChristmasCounter();
  counter.init();
};
