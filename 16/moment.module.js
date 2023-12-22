import { todayDate, addDate } from "./time-funcs.js";
const resultParagraph = document.querySelector(".result-paragraph");
resultParagraph.innerHTML = `${todayDate()} <br> ${addDate()}`;
