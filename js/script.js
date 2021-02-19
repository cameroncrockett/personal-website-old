// Functions for changing text in about me section

const addFadeOut = () => {
  document
    .getElementById("p-div")
    .classList.add("animate__fadeOutDown");
  console.log("Fade out added");
};

const removeFadeOut = () => {
  document
    .getElementById("p-div")
    .classList.remove("animate__fadeOutDown");
  console.log("Fade out removed");
};

const addFadeIn = () => {
  document
    .getElementById("p-div")
    .classList.add("animate__fadeInUp");
  console.log("Fade In Added");
};

const lifeText = () => {
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
    console.log("Fade out removed");
  }, 1400);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.add("animate__fadeInUp");
    console.log("Fade In Added");
  }, 1401);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.remove("animate__fadeInUp");
    console.log("Fade In Removed");
  }, 2500);
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
    console.log("Fade out removed");
  }, 1400);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.add("animate__fadeInUp");
    console.log("Fade In Added");
  }, 1401);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.remove("animate__fadeInUp");
    console.log("Fade In Removed");
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
    console.log("Fade out removed");
  }, 1400);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.add("animate__fadeInUp");
    console.log("Fade In Added");
  }, 1401);
  setTimeout(function () {
    document
      .getElementById("p-div")
      .classList.remove("animate__fadeInUp");
    console.log("Fade In Removed");
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
  }, 4000);
};

removeAnim();
