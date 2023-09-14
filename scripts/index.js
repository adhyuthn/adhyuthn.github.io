function ScrollDown() {
    window.scrollTo(
        {
            top: 1000,
            behavior: 'smooth'
        }
    );
}

function ChangeBG_Color() {
    document.body.style.cssText = 'background-image: radial-gradient(#000000 60%, #8e8e8e)';
    document.getElementById('heading').style.cssText = 'color: #dbdbdb';
}

