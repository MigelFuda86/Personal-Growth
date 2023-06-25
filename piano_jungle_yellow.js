// FILE: app.js

// Global Variables
let name;
let age;
let currentGoal;
let blogPostsCompleted;
let currentMentalState;

// Homepage
function homepage() {
  // set name and age
  name = prompt("What's your name?");
  age = prompt("How old are you?");

  console.log("Welcome to the personal development coaching program, " + name + "!");
  console.log("You are " + age + " years old!");

  // set current goal
  currentGoal = prompt("What would you like to focus on today?");
  console.log("Your goal today is to " + currentGoal + "!");

  // set blog posts completed
  blogPostsCompleted = 0;

  // current mental state
  currentMentalState = "normal";
}

// Tasks
function workOnGoal() {
  const task1 = prompt("Would you like to read a blog post or watch a tutorial video?");
  if (task1 === "blog post") {
    blogPostsCompleted += 1;
    console.log("You've read " + blogPostsCompleted + " blog post(s)!");
  } else if (task1 === "tutorial video") {
    console.log("You watched a helpful video!");
  } else {
    console.log("That's not a valid task!");
  }
}

// Check Mental State
function checkMentalState() {
  const task2 = prompt("How do you feel?");
  if (task2 === "stressed" || task2 === "tired") {
    currentMentalState = "stressed";
    console.log("Let's take a break!");
  } else if (task2 === "normal" || task2 === "calm") {
    currentMentalState = "normal";
    console.log("Keep going!");
  } else {
    console.log("That's not a valid mental state!");
  }
  console.log("Your current mental state is " + currentMentalState);
}

// Take a Break
function takeABreak() {
  if (currentMentalState === "stressed") {
    console.log("Let's take a break and do something relaxing!");
    const breakActivity = prompt("What would you like to do for a break?");
    console.log("You chose to " + breakActivity + " for a break!");
  }
}

// Track Progress
function trackProgress() {
  console.log("You've accomplished " + blogPostsCompleted + " blog post(s) throughout the program!");
  console.log("Keep it up!");
}

// Completion
function completion() {
  console.log("You have successfully completed the personal development coaching program, " + name + "!");
  console.log("You are now closer to your goal of " + currentGoal + "!");
}

// Main Program
function mainProgram() {
  homepage();
  while (blogPostsCompleted < 3) {
    workOnGoal();
    checkMentalState();
    takeABreak();
    trackProgress();
  }
  completion();
}

mainProgram();