let $button = $('.hamburger');
let $navList = $('header nav');
$button.on('click', function(){
    $(this).toggleClass('active');
    $navList.toggleClass('active');
})
