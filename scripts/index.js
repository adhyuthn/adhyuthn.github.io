import * as base from './base.js';

let email_state = 0;
let pane_about = document.getElementsByClassName("pane_about");
let scroll_button = document.getElementById("scroll_down");
let heading = document.getElementsByClassName("heading")[0];
let email = document.getElementById("email_button");
let beautiful_internet = document.getElementById("beautiful_internet")
let beautiful_internet_pane = document.getElementsByClassName("pane_internet")[0];
let notif_toast = document.getElementById("notif_toast")
const beautiful_internet_text = beautiful_internet.innerText

function ScrollDown() {
    pane_about[0].scrollIntoView({ behavior: 'smooth' });
}

function displayMail(){
    email_state = !Boolean(email_state);
    if (email_state == 1){
        document.getElementById('email').style.cssText = 'visibility: visible';
    }
    else {
        document.getElementById('email').style.cssText = 'visibility: hidden';
    }
}

function glitchText(args) {
    console.log(args);
    let counter = 0;
    const iterations = beautiful_internet_text.length;
    let intervalID = setInterval(() => {
        // https://www.youtube.com/watch?v=W5oawMJaXbU
        // split string -> Array -> Map each element based on an itertion rule -> join back
        beautiful_internet.innerText = beautiful_internet.innerText.split("").map(
            (element, index) => { 
                // nth run -> keep first nth elements
                if (index < counter) {
                    return beautiful_internet_text[index];
                }
                return String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        ).join('');
        if (counter > iterations) {
            clearInterval(intervalID);
        }
        counter += 1/2;
    }, 20);
}

scroll_button.addEventListener("click", ScrollDown);
heading.addEventListener("click", base.ChangeBG_Color)
email.addEventListener("click", displayMail);
console.log("PC");
const beautiful_internet_observer_opts = {
    root: null,
    rootMargin: "0px",
    threshold: 0.55,
};
const beautiful_internet_observer = new IntersectionObserver(glitchText, beautiful_internet_observer_opts);
beautiful_internet_observer.observe(beautiful_internet_pane);
beautiful_internet.addEventListener("mouseover", glitchText);