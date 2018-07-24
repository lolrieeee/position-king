console.log('hello');

$('#code-game-container').on('blur', function(){
    console.log($('#code-game-container').val());

    $('#game-container').attr('style', $('#code-game-container').val());
});

$('#code-game-red').on('blur', function(){
    console.log($('#code-game-red').val());

    $('#game-block-red').attr('style', $('#code-game-red').val());
});

$('#code-game-blue').on('blur', function(){
    console.log($('#code-game-blue').val());

    $('#game-block-blue').attr('style', $('#code-game-blue').val());
});

$('#code-game-green').on('blur', function(){
    console.log($('#code-game-green').val());

    $('#game-block-green').attr('style', $('#code-game-green').val());
});
