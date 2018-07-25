$('#menu-open').click(function(){
    $(this).toggleClass('hide-this');
    $('#menu-close').toggleClass('hide-this');
    $('.menu').toggleClass('open-menu');
});

$('#menu-close').click(function(){
    $(this).toggleClass('hide-this');
    $('#menu-open').toggleClass('hide-this');
    $('.menu').toggleClass('open-menu');
});

$('#code-game-grey').on('blur', function(){
    $('#game-block-grey').attr('style', $('#code-game-grey').val());
});

$('#code-game-red').on('blur', function(){
    $('#game-block-red').attr('style', $('#code-game-red').val());
});

$('#code-game-blue').on('blur', function(){
    $('#game-block-blue').attr('style', $('#code-game-blue').val());
});

$('#code-game-green').on('blur', function(){
    $('#game-block-green').attr('style', $('#code-game-green').val());
});
