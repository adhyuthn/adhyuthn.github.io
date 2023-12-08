let heading_state = 0;
let email_state = 0;
let easter_count = 0;
let pane_todo = document.getElementsByClassName("pane_todo");
let body_element = document.getElementsByTagName("body");
var root_css = document.querySelector(':root');

function ScrollDown() {
    pane_todo[0].scrollIntoView({ behavior: 'smooth' });
}

function ChangeBG_Color() {
    easter_count++;
    heading_state = !Boolean(heading_state);
    console.log(easter_count);
    if (easter_count == 10) {
        body_element[0].style.cssText = 'background-image: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%);';
        console.log("easter egg unlocked");
    }
    if (easter_count < 10){
        if (heading_state == 1){
            root_css.style.setProperty('--ui-primary-light', '#e9e9e9');
            root_css.style.setProperty('--ui-primary-dark', '#000000');
            root_css.style.setProperty('--text-primary', '#ffffff');
            root_css.style.setProperty('--text-shadow', '#ffffff');
        }
        else{
            root_css.style.setProperty('--ui-primary-light', '#b6a0ff');
            root_css.style.setProperty('--ui-primary-dark', '#1a1425');
            root_css.style.setProperty('--text-primary', '#b6a0ff');
            root_css.style.setProperty('--text-shadow', '#d1c7f1');
        }
    }
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

