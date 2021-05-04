
"use strict"

function flipCard() {
    if (document.querySelector(".lastcard:checked")) {
    document.querySelector(".firstcard").checked = true;
}
else {
    document.querySelector(".cards:checked").nextElementSibling.checked = true;
}

}
    
setInterval(function () {
    flipCard();
}, 2800);