let heading_state = 0;
let myname = document.getElementById('heading');
let pane1 = document.getElementsByClassName("pane1");
let pane2 = document.getElementsByClassName("pane2");

function ScrollDown() {
    window.scrollTo(
        {
            top: 1000,
            behavior: 'smooth'
        }
    );
}

function ChangeBG_Color() {
    heading_state = !Boolean(heading_state);
    if (heading_state == 1){
        document.body.style.cssText = 'background-image: radial-gradient(#000000 60%, #8e8e8e)';
        document.getElementById('heading').style.cssText = 'color: #dbdbdb';
        document.getElementById('beautiful_internet').style.cssText = 'color: #dbdbdb';
        for (i = 0; i < pane1.length; i++){
            pane1[i].style.cssText = 'color: #000000; background-color: #dbdbdb';
        }
        for (i = 0; i < pane2.length; i++){
            pane2[i].style.cssText = 'background-color: #000000';
        }
    }
    else{
        document.body.style.cssText = 'background-image: radial-gradient(#b6a0ff, #1a1425 80%)';
        document.getElementById('heading').style.cssText = 'color: #b6a0ff';
        document.getElementById('beautiful_internet').style.cssText = 'color: #1a1425';
        for (i = 0; i < pane1.length; i++){
            pane1[i].style.cssText = 'color: #d6c9ff; background-color: #1a1425';
        }
        for (i = 0; i < pane2.length; i++){
            pane2[i].style.cssText = 'background-color: #b6a0ff';
        }
    }
}

