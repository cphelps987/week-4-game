
$( document ).ready(function() {
    console.log( "ready!" );


    var player1 = [];
    var health = [];
    var attack = [];
    var counterAttack = [];


    var player2_select = true;
    var player1_selected = true;

    $(".image").click(function() {
        console.log( "You clicked an image!");

        if(player1_selected = true)
            $(this).append($(".player1"))

        player1_selected = false;

    });


});
