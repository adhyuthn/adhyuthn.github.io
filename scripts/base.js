let heading_state = 0;
let body_element = document.getElementsByTagName("body");
let easter_count = 0;
let root_css = document.querySelector(':root');

console.log("base.js imported");

const theme_state = localStorage.getItem('theme_state');
console.log("theme_state set to: ", theme_state);
Set_theme(theme_state);

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
        else{
            root_css.style.setProperty('--ui-primary-light', '#b6a0ff');
            root_css.style.setProperty('--ui-primary-dark', '#1a1425');
            root_css.style.setProperty('--text-primary', '#b6a0ff');
            root_css.style.setProperty('--text-shadow', '#d1c7f1');
            root_css.style.setProperty('--ui-panes-primary', '#04040471');
        
    }
}
    
export function ChangeBG_Color() {
    heading_state= !Boolean(heading_state);
    console.log(easter_count);
    localStorage.setItem('theme_state', heading_state.toString());
    easter_count++;
    if (easter_count == 10) {
        body_element[0].style.cssText = 'background-image: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%,rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%);';
        console.log("easter egg unlocked");
        document.getElementById("name_heading").textContent = "അധ്യുത് നാരായൺ."
    }
    if (easter_count < 10){
        console.log("Going to set theme");
        Set_theme(heading_state.toString());
    }
}