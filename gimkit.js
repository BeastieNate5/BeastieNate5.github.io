$(document).ready(() => {
    $('.join').on('click', () => {
        $('.join').fadeOut();
        $('.gimkit').fadeOut();
        $('.type').fadeOut();
        $('h1').fadeIn();
    })
    $('h1').hide(); 
})