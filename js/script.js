// Functions for animating card in about me section

const addFadeOut = () => {
  document
    .getElementById("p-div")
    .classList.add("animate__fadeOutDown");
};

const removeFadeOut = () => {
  document
    .getElementById("p-div")
    .classList.remove("animate__fadeOutDown");
};

const addFadeIn = () => {
  document
    .getElementById("p-div")
    .classList.add("animate__fadeInUp");
};

// Functions for changing text on click

const lifeText = () => {
  if (
    document.getElementById("life").style
      .textDecoration != "underline"
  ) {
    console.log(
      document.getElementById("life").style
        .textDecoration
    );
    document.getElementById(
      "education"
    ).style.textDecoration = "none";
    document.getElementById(
      "experience"
    ).style.textDecoration = "none";
    document.getElementById(
      "life"
    ).style.textDecoration = "underline";
    addFadeOut();
    setTimeout(function () {
      document.getElementById(
        "about-paragraph"
      ).innerHTML =
        "I am currently 29 years old. I am from Oklahoma and I have a 2 year old son who is my world! When I am not working, I am typically playing with him.";
    }, 1000);
    setTimeout(function () {
      document
        .getElementById("p-div")
        .classList.remove("animate__fadeOutDown");
    }, 1400);
    setTimeout(function () {
      document
        .getElementById("p-div")
        .classList.add("animate__fadeInUp");
    }, 1401);
    setTimeout(function () {
      document
        .getElementById("p-div")
        .classList.remove("animate__fadeInUp");
    }, 2500);
  }
};

const educationText = () => {
  document.getElementById(
    "life"
  ).style.textDecoration = "none";
  document.getElementById(
    "experience"
  ).style.textDecoration = "none";
  document.getElementById(
    "education"
  ).style.textDecoration = "underline";
  addFadeOut();
  setTimeout(function () {
    document.getElementById(
      "about-paragraph"
    ).innerHTML =
      "I started my self-taught development journey at the beginning of 2020. Once I started, I was hooked. I immediately started filling my time with YouTube videos, courses, and bootcamps.";
  }, 1000);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.remove("animate__fadeOutDown");
  }, 1400);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.add("animate__fadeInUp");
  }, 1401);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.remove("animate__fadeInUp");
  }, 2500);
};

const experienceText = () => {
  document.getElementById(
    "education"
  ).style.textDecoration = "none";
  document.getElementById(
    "life"
  ).style.textDecoration = "none";
  document.getElementById(
    "experience"
  ).style.textDecoration = "underline";
  addFadeOut();
  setTimeout(function () {
    document.getElementById(
      "about-paragraph"
    ).innerHTML =
      "My portfolio consists of projects using HTML, CSS, and Javascript. I typically use React for my library of choice for front-end development.";
  }, 1000);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.remove("animate__fadeOutDown");
  }, 1400);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.add("animate__fadeInUp");
  }, 1401);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.remove("animate__fadeInUp");
  }, 2500);
};

// Removing animations from nav bar after page load

const removeAnim = () => {
  setTimeout(function () {
    document
      .getElementById("btn1")
      .classList.remove("btn1-anim");
    document
      .getElementById("btn2")
      .classList.remove("btn2-anim");
    document
      .getElementById("btn3")
      .classList.remove("btn3-anim");
  }, 3000);
};

// Show Top button after scrolling down

const topBtn = () => {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document
      .getElementById("top-btn")
      .classList.add("topBtnAnimate");
    document
      .getElementById("top-btn")
      .classList.remove("hidden");
  } else if (
    document.documentElement.scrollTop < 1 &&
    document
      .getElementById("top-btn")
      .classList.contains("topBtnAnimate")
  ) {
    document
      .getElementById("top-btn")
      .classList.remove("topBtnAnimate");
    document
      .getElementById("top-btn")
      .classList.add("topBtnAnimateOut");
    setTimeout(function () {
      document
        .getElementById("top-btn")
        .classList.add("hidden");
      document
        .getElementById("top-btn")
        .classList.remove("topBtnAnimateOut");
    }, 1000);
  }
};

window.onload = removeAnim();

window.onscroll = function () {
  topBtn();
};
