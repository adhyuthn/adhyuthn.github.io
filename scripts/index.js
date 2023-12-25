import './base';

let email_state = 0;
let pane_todo = document.getElementsByClassName("pane_todo");

function ScrollDown() {
    pane_todo[0].scrollIntoView({ behavior: 'smooth' });
}

function hacker_text() {
    
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

