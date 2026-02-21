let heading_state = 0;
let body_element = document.getElementsByTagName("body");
let easter_count = 0;
let root_css = document.querySelector(':root');
let notif_toast = document.getElementById("notif_toast");

console.log("base.js imported");

const theme_state = localStorage.getItem('theme_state');
console.log("theme_state set to: ", theme_state);
if (theme_state != null) {
    Set_theme(theme_state);
}

function Set_theme(state) {
    console.log("Changing theme");
    if (state == 'true') {
            console.log("Inside dark mode");
            root_css.style.setProperty('--ui-primary-light', '#e9e9e9');
            root_css.style.setProperty('--ui-primary-dark', '#000000');
            root_css.style.setProperty('--text-primary', '#ffffff');
            root_css.style.setProperty('--text-shadow', '#ffffff');
            root_css.style.setProperty('--ui-panes-primary', '#6b6b6b5c');
    }
    else if (state == 'false'){
            root_css.style.setProperty('--ui-primary-light', '#89b4fa');
            root_css.style.setProperty('--ui-primary-dark', '#1a1425');
            root_css.style.setProperty('--text-primary', '#89b4fa');
            root_css.style.setProperty('--text-shadow', '#d1c7f1');
            root_css.style.setProperty('--ui-panes-primary', '#04040471');
        
    }
    else if (state == 'Ojas') {
        console.log("Ojas mode theme set");
        body_element[0].style.cssText = `
            background-image: linear-gradient(
                90deg, 
                rgba(255,0,0,1) 0%, 
                rgba(255,154,0,1) 10%, 
                rgba(208,222,33,1) 20%, 
                rgba(79,220,74,1) 30%, 
                rgba(63,218,216,1) 40%, 
                rgba(47,201,226,1) 50%, 
                rgba(28,127,238,1) 60%, 
                rgba(95,21,242,1) 70%, 
                rgba(186,12,248,1) 80%, 
                rgba(251,7,217,1) 90%, 
                rgba(255,0,0,1) 100%
            );
        `;
    }
}

export function Send_notif(message) {
    notif_toast.style.visibility = "visible";
    notif_toast.textContent = message;
    notif_toast.style.animation = "opaque_entry 1s forwards"
    setTimeout(()=>{
        notif_toast.style.animation = "opaque_exit 1s forwards"
    }, 1000)
}
    
export function ChangeBG_Color() {
    heading_state= !Boolean(heading_state);
    console.log(easter_count);
    localStorage.setItem('theme_state', heading_state.toString());
    easter_count++;
    if (easter_count == 10) {
        heading_state = 'Ojas';
        Send_notif("ഓജസ്സ്  unlocked");
        console.log("Ojas Mode unlocked");
        document.getElementById("name_heading").textContent = "അധ്യുത് നാരായൺ."
        Set_theme(heading_state.toString());
    }
    if (easter_count < 10){
        Send_notif("You are " + (10 - easter_count) + " step away from unlocking Ojas 🚀 ");
        console.log("Going to set theme");
        Set_theme(heading_state.toString());
    }
}