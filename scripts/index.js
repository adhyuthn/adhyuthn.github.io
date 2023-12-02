let heading_state = 0;
let email_state = 0;
let pane_todo = document.getElementsByClassName("pane_todo");
var root_css = document.querySelector(':root');

function ScrollDown() {
    pane_todo[0].scrollIntoView({ behavior: 'smooth' });
}

function ChangeBG_Color() {
    heading_state = !Boolean(heading_state);
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

function displayMail(){
    email_state = !Boolean(email_state);
    if (email_state == 1){
        document.getElementById('email').style.cssText = 'visibility: visible';
    }
    else {
        document.getElementById('email').style.cssText = 'visibility: hidden';
    }
}

