
$( document ).ready(function() {
    console.log( "ready!" );


    var player1 = [];
    var player2 = [];
    var health = [];
    var attack = [];
    var counterAttack = [];

    var player1_selected = true;
    var player2_selected = true;

    console.log("Player One " + player1_selected)

    $(".good").click(function() {
        console.log( "You clicked a good image!");

        if (player1_selected === true) {
            $(this).addClass("yourFirst")
            $(".yourFirst").appendTo(".player1");
            player1++;
            player1_selected = false;
            console.log("Player 1 " + player1_selected);
        }
        else {
            $(this).hide();

        }
    });

    console.log("Player Two " + player2_selected)

    $(".bad").click(function() {
        console.log( "You clicked a bad image!");

        if (player2_selected === true) {
            $(this).addClass("yourSecond")
            $(".yourSecond").appendTo(".player2");
            player2++;
            player2_selected = false;
            console.log("Player 2 " + player2_selected);
        }
    });

    $("")

});




