import * as base from './base.js';

let email_state = 0;
let pane_todo = document.getElementsByClassName("pane_todo");
let scroll_button = document.getElementById("scroll_down");
let heading = document.getElementsByClassName("heading")[0];
let email = document.getElementById("email_button");

function ScrollDown() {
    pane_todo[0].scrollIntoView({ behavior: 'smooth' });
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

scroll_button.addEventListener("click", ScrollDown);
heading.addEventListener("click", base.ChangeBG_Color)
email.addEventListener("click", displayMail);
