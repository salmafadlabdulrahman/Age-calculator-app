"strict mode";

const dayInput = document.querySelector(".dayInput");
const monthInput = document.querySelector(".monthInput");
const yearInput = document.querySelector(".yearInput");

const resultBtn = document.querySelector(".img");
let inputs = document.querySelectorAll(".input");

let requiredFieldDay = document.querySelector(".requiredField");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");

let yearField = document.querySelector(".year-span");
let monthField = document.querySelector(".month-span");
let dayField = document.querySelector(".day-span");

const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const emptyField = function () {
  [...inputs].forEach((input) => {
    if (!Number(input.value)) {
      input.style.border = "1px solid hsl(0, 100%, 67%)";
    } else {
      input.style.border = "1px solid hsl(0, 0%, 86%)";
    }
  });

  //Day
  if (!Number(dayInput.value)) {
    text1.textContent = `This field is required`;
    
  } else if (Number(dayInput.value) > 31 || Number(dayInput.value) < 1) {
    text1.textContent = `Must be a valid day`;
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    text1.textContent = ``;
  }

  //Month
  if (!Number(monthInput.value)) {
    text2.textContent = `This field is required`;
  } else if (Number(monthInput.value) > 12 || Number(monthInput.value) < 1) {
    text2.textContent = `Must be a valid month`;
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else if (Number(dayInput.value) === 31 && Number(monthInput.value) === 4) {
    text1.textContent = `Must be a valid date`;
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    text2.textContent = ``;
  }

  //Year
  if (!Number(yearInput.value)) {
    text3.textContent = `This field is required`;
  } else if (Number(yearInput.value) > currentYear) {
    text3.textContent = `Must be in the past`;
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    text3.textContent = ``;
  }
};

const calcAge = function () {
  if (dayInput.value > currentDay) {
    currentDay = currentDay + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if (monthInput.value > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }
  let day = currentDay - dayInput.value;
  let month = currentMonth - monthInput.value;
  let year = currentYear - yearInput.value;

if(dayInput.value && monthInput.value && yearInput.value) {
  yearField.textContent = year;
  monthField.textContent = month;
  dayField.textContent = day;
}
  
};

//Event listener
resultBtn.addEventListener("click", function () {
  emptyField();
  calcAge();
});


