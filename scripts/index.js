let heading_state = 0;
let myname = document.getElementById('heading');
let pane_todo = document.getElementsByClassName("pane_todo");
let pane_internet = document.getElementsByClassName("pane_internet");

function ScrollDown() {
    pane_todo[0].scrollIntoView({ behavior: 'smooth' });
}

function ChangeBG_Color() {
    heading_state = !Boolean(heading_state);
    if (heading_state == 1){
        document.body.style.cssText = 'background-image: radial-gradient(#000000 60%, #8e8e8e)';
        document.getElementById('heading').style.cssText = 'color: #dbdbdb';
        document.getElementById('beautiful_internet').style.cssText = 'color: #dbdbdb';
        for (i = 0; i < pane_todo.length; i++){
            pane_todo[i].style.cssText = 'color: #000000; background-color: #dbdbdb';
        }
        for (i = 0; i < pane_internet.length; i++){
            pane_internet[i].style.cssText = 'background-color: #000000';
        }
    }
    else{
        document.body.style.cssText = 'background-image: radial-gradient(#b6a0ff, #1a1425 80%)';
        document.getElementById('heading').style.cssText = 'color: #b6a0ff';
        document.getElementById('beautiful_internet').style.cssText = 'color: #1a1425';
        for (i = 0; i < pane_todo.length; i++){
            pane_todo[i].style.cssText = 'color: #d6c9ff; background-color: #1a1425';
        }
        for (i = 0; i < pane_internet.length; i++){
            pane_internet[i].style.cssText = 'background-color: #b6a0ff';
        }
    }
}

function displayMail(){
    document.getElementById('email').style.cssText = 'visibility: visible';
}

