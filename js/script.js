console.log("Hi! Welcome to my portfolio site. I'm glad your here!");
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    x.className += ' responsive';
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}