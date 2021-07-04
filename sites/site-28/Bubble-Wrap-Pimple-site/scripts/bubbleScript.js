
"use strict"

$('.bubble').on('click', function() {
    $(this).toggleClass('active');
});

// function createNewWrap() {
//     $('.bubble').removeClass('active');
// }

$('.sheetbutton').on('click', function() {
    $('.bubble').removeClass('active');
})
