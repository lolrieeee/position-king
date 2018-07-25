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

$('#code-game-container').on('blur', function(){
    $('#game-container').attr('style', $('#code-game-container').val());
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
